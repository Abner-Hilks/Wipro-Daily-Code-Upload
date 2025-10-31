-- ===========================================
-- 📘 EduPro Learning Database Project
-- Author: Arpit Mahalle
-- Purpose: Normalized University Database with Joins & Subqueries
-- ===========================================

-- Step 1️⃣: Create and use the database
CREATE DATABASE IF NOT EXISTS EduProLearning;
USE EduProLearning;

-- Step 2️⃣: Create tables (Normalized up to 3NF)
-- --------------------------------------------

CREATE TABLE Department (
    DeptID INT AUTO_INCREMENT PRIMARY KEY,
    DeptName VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Student (
    StudentID VARCHAR(10) PRIMARY KEY,
    StudentName VARCHAR(100) NOT NULL
);

CREATE TABLE Instructor (
    InstructorID INT AUTO_INCREMENT PRIMARY KEY,
    InstructorName VARCHAR(100) NOT NULL,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Course (
    CourseID INT AUTO_INCREMENT PRIMARY KEY,
    CourseName VARCHAR(100) NOT NULL,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Enrollment (
    EnrollmentID INT AUTO_INCREMENT PRIMARY KEY,
    StudentID VARCHAR(10),
    CourseID INT,
    InstructorID INT,
    Grade CHAR(1),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID),
    FOREIGN KEY (InstructorID) REFERENCES Instructor(InstructorID)
);

-- Step 3️⃣: Insert data into tables
-- --------------------------------------------

-- Department
INSERT INTO Department (DeptName) VALUES
('Computer Science'),
('Information Technology');

-- Students
INSERT INTO Student (StudentID, StudentName) VALUES
('S101', 'Asha Gupta'),
('S102', 'Raj Verma'),
('S103', 'Priya Singh'),
('S104', 'Amit Kumar'),
('S105', 'Sneha Patil');

-- Instructors
INSERT INTO Instructor (InstructorName, DeptID) VALUES
('Dr. Mehta', 1),
('Dr. Sharma', 1),
('Prof. Nair', 2);

-- Courses
INSERT INTO Course (CourseName, DeptID) VALUES
('Database Systems', 1),
('Data Structures', 1),
('Operating Systems', 1),
('Web Development', 2),
('Networking Basics', 2);

-- Enrollments
INSERT INTO Enrollment (StudentID, CourseID, InstructorID, Grade) VALUES
('S101', 1, 1, 'A'),
('S102', 2, 2, 'B'),
('S101', 2, 2, 'A'),
('S103', 3, 1, 'C'),
('S104', 4, 3, NULL);

-- Step 4️⃣: Queries (Joins and Reports)
-- --------------------------------------------

-- 1️⃣ Retrieve students with their enrolled course names and instructors
SELECT s.StudentName, c.CourseName, i.InstructorName, e.Grade
FROM Enrollment e
JOIN Student s ON e.StudentID = s.StudentID
JOIN Course c ON e.CourseID = c.CourseID
JOIN Instructor i ON e.InstructorID = i.InstructorID;

-- 2️⃣ Display all courses along with their department names (INNER JOIN)
SELECT c.CourseName, d.DeptName
FROM Course c
INNER JOIN Department d ON c.DeptID = d.DeptID;

-- 3️⃣ Retrieve all students and the courses they are enrolled in (LEFT JOIN)
SELECT s.StudentName, c.CourseName, e.Grade
FROM Student s
LEFT JOIN Enrollment e ON s.StudentID = e.StudentID
LEFT JOIN Course c ON e.CourseID = c.CourseID;

-- 4️⃣ List instructors who currently have no students assigned (RIGHT JOIN)
SELECT i.InstructorName, c.CourseName
FROM Course c
RIGHT JOIN Instructor i ON c.DeptID = i.DeptID
WHERE i.InstructorID NOT IN (SELECT InstructorID FROM Enrollment);

-- Step 5️⃣: Subqueries and Advanced Reports
-- --------------------------------------------

-- 5.1️⃣ Retrieve all students who scored the highest grade (‘A’) in any course
SELECT DISTINCT s.StudentName
FROM Student s
JOIN Enrollment e ON s.StudentID = e.StudentID
WHERE e.Grade = 'A';

-- 5.2️⃣ Find the course(s) where the average grade is highest (Subquery)
SELECT c.CourseName
FROM Course c
JOIN Enrollment e ON c.CourseID = e.CourseID
GROUP BY c.CourseName
HAVING AVG(
    CASE 
        WHEN e.Grade = 'A' THEN 4
        WHEN e.Grade = 'B' THEN 3
        WHEN e.Grade = 'C' THEN 2
        WHEN e.Grade = 'D' THEN 1
        ELSE 0
    END
) = (
    SELECT MAX(avg_grade)
    FROM (
        SELECT AVG(
            CASE 
                WHEN Grade = 'A' THEN 4
                WHEN Grade = 'B' THEN 3
                WHEN Grade = 'C' THEN 2
                WHEN Grade = 'D' THEN 1
                ELSE 0
            END
        ) AS avg_grade
        FROM Enrollment
        GROUP BY CourseID
    ) AS sub
);

-- 5.3️⃣ Display instructors who teach more than one course (Correlated Subquery)
SELECT InstructorName
FROM Instructor i
WHERE (
    SELECT COUNT(*)
    FROM Course c
    WHERE c.DeptID = i.DeptID
) > 1;

-- 5.4️⃣ List students who have not enrolled in any course (Subquery with NOT IN)
SELECT StudentName
FROM Student
WHERE StudentID NOT IN (SELECT StudentID FROM Enrollment);

-- ✅ End of Script
