-- Create two new databases --
CREATE DATABASE IF NOT EXISTS fitness_db;

-- Use fitness_db --
USE fitness_db;

-- See database in use --
SELECT DATABASE();

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE workoutinfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    workout_name VARCHAR(100) NOT NULL,
    workout_date DATE NOT NULL,
    duration_minutes INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE supplements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    supplement_name VARCHAR(100) NOT NULL,
    intake_date DATE NOT NULL,
    quantity FLOAT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);
