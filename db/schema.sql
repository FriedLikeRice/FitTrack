-- Create two new databases --
DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;

-- Use inventory_db --
USE fitness_db;

-- See database in use --
SELECT DATABASE();

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Describe the 'user' table
DESC user;
