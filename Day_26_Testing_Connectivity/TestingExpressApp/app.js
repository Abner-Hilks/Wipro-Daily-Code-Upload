const express = require('express');
const app = express();

// 1. Middleware
const customHeaderMiddleware = (req, res, next) => {
    res.setHeader('x-custom-header', 'TestHeaderValue');
    next();
};

app.use(express.json());

// 2. Routes
app.get('/', (req, res) => {
    res.send("Hello World!");
});

// Route required by your test
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Emily" }
    ];
    res.status(200).json(users);
});

// Your middleware must apply ON THIS ROUTE
app.get('/some-route', customHeaderMiddleware, (req, res) => {
    res.status(200).send("Middleware route works");
});

module.exports = app;
