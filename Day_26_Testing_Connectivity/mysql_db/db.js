// db.js
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',   // your MySQL password
    database: 'day26db' // your database name
});

// Test DB connection
db.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connected to MySQL successfully!");
        connection.release();
    }
});

module.exports = db;
