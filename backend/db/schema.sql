DROP DATABASE IF EXISTS webstore_p;
CREATE DATABASE webstore_p;

\c webstore_p;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS orders;

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);

CREATE TABLE products(
    id VARCHAR PRIMARY KEY,
    name TEXT NOT NULL,
    price BIGINT DEFAULT 0
);

CREATE TABLE orders(
    id VARCHAR PRIMARY KEY,
    email VARCHAR,
    customerName TEXT NOT NULL,
    totalAmount BIGINT DEFAULT 0,
    status BOOLEAN NOT NULL DEFAULT FALSE
);