// here we will set up a basic Express server
// joi and express-validationator based validation middleware will be used in the routes

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

const { registerValidationRules } = require('./express-validator/userValidation');
const { getValidationResult } = require('./express-validator/validationResult');

app.use(express.json());

app.use('/routes', userRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to the Express server with validation!");
});

// Signup with express-validator
app.post('/signup',
    registerValidationRules,
    (req, res, next) => {
        const errors = getValidationResult(req);
        if (errors) {
            return res.status(400).json({ errors });
        }
        next();
    },
    (req, res) => {
        res.json({ success: true, message: "Signup route - implemented with express-validator" });
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Explanation of the code:
// 1. We import the Express package and the user routes defined in routes/userRoutes.js.
// 2. We create an Express application instance.
// 3. We set up middleware to parse JSON request bodies.
// 4. We use the user routes for the /routes endpoint.
// 5. We start the server and listen on the specified port. ie 3000 or from environment variable.