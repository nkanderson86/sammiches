CREATE DATABASE
IF NOT EXISTS sammiches_db;

USE sammiches_db;

CREATE TABLE sammiches
(
    id INT NOT NULL
    AUTO_INCREMENT, 
    sammich_name VARCHAR
    (60) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);