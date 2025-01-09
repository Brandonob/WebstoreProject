const db = require('../db/index');

const createOrder = async (req, res, next) => {
  try {
    await db.none(
      'INSERT INTO orders (id, email) VALUES($(id), $(email))',
      req.body
    );
    res.json({
      message: 'NEW USER CREATED!',
    });
  } catch (error) {
    next(error);
  }
};

const fetchAllOrders = async (req, res, next) => {
  try {
    let orders = await db.any('SELECT * FROM orders');

    res.status(200).json({
      status: 'Success',
      message: 'All orders have been retrieved.',
      payload: orders,
    });
  } catch (error) {
    res.status(404).json({
      status: 'Error',
      message: 'Unable to fetch orders',
      payload: null,
    });
  }
};

module.exports = { createOrder, fetchAllOrders };
