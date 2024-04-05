-- Create two new databases --
DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;

-- Use inventory_db --
USE fitness_db;

-- See database in use --
SELECT DATABASE();

CREATE TABLE nutriFit as 
SELECT 