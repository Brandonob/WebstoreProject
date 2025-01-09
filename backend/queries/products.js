const db = require('../db/index');

const createProduct = async (req, res, next) => {
  try {
    await db.one(
      'INSERT INTO products (id, name, price) VALUES($(id), $(name), $(price))',
      req.body
    );
    res.json({
      message: 'NEW USER CREATED!',
    });
  } catch (error) {
    next(error);
  }
};

const fetchAllProducts = async (req, res, next) => {
  try {
    let products = await db.any('SELECT * FROM products');

    res.status(200).json({
      status: 'Success',
      message: 'All products have been retrieved.',
      payload: products,
    });
  } catch (error) {
    res.status(404).json({
      status: 'Error',
      message: 'Unable to fetch products',
      payload: null,
    });
  }
};

module.exports = { createProduct, fetchAllProducts };
