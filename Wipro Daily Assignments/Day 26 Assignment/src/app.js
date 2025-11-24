const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

require("./config/mongo");   // <-- ADD THIS LINE

const mysqlRoutes = require("./routes/mysqlRoutes");
const mongoRoutes = require("./routes/mongoRoutes");
const sequelizeRoutes = require("./routes/sequelizeRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

app.use("/api", mysqlRoutes);
app.use("/api", mongoRoutes);
app.use("/api", sequelizeRoutes);

module.exports = app;
