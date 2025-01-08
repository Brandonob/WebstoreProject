const orders = require('express').Router();
const { createOrder } = require('../queries/orders');

orders.post('/', createOrder);

module.exports = orders;
