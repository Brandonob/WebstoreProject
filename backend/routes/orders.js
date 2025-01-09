const orders = require('express').Router();
const { createOrder, fetchAllOrders } = require('../queries/orders');

orders.post('/', createOrder);
orders.get('/', fetchAllOrders);

module.exports = orders;
