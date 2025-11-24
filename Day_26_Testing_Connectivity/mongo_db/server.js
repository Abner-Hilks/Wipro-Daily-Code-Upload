const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("./db");
const routes = require("./routes");

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
