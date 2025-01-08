DROP DATABASE IF EXISTS webstore_p;
CREATE DATABASE webstore_p;

\c webstore_p;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id VARCHAR PRIMARY KEY
    email VARCHAR
)