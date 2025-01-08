const db = require('../db/index');

const createProduct = async (req, res, next) => {
  try {
    await db.none(
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

module.exports = { createProduct };
