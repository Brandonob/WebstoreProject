const products = require('express').Router();
const { createProduct } = require('../queries/products');

products.post('/', createProduct);

module.exports = products;
