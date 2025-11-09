--  Create the database if it doesn’t already exist
CREATE DATABASE IF NOT EXISTS EmployeeDB;

--  Switch to the created database
USE EmployeeDB;

--  Create the Employees table
CREATE TABLE IF NOT EXISTS Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,  -- Auto-increment primary key
    FirstName VARCHAR(50) NOT NULL,             -- First name cannot be null
    LastName VARCHAR(50) NOT NULL,              -- Last name cannot be null
    Email VARCHAR(100) UNIQUE NOT NULL,         -- Email must be unique and not null
    HireDate DATE NOT NULL,                     -- Stores date in YYYY-MM-DD format
    Salary DECIMAL(10, 2) NOT NULL              -- Salary with 2 decimal places
);

--  Insert sample data into the Employees table
INSERT INTO Employees (FirstName, LastName, Email, HireDate, Salary) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-01-15', 60000.00),
('Jane', 'Smith', 'jane.smith@example.com', '2023-02-20', 65000.00),
('Alice', 'Johnson', 'alice.johnson@example.com', '2023-03-10', 70000.00);

--  Query all employee data
SELECT * FROM Employees;

-- Query only specific columns (FirstName, LastName, Email)
SELECT FirstName, LastName, Email FROM Employees;