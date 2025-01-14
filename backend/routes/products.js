const products = require('express').Router();
const { createProduct, fetchAllProducts } = require('../queries/products');

products.post('/', createProduct);
products.g