const db = require('../db/index');

const createUser = async (req, res, next) => {
  try {
    await db.one(
      'INSERT INTO users (id, email) VALUES($(id), $(email))',
      req.body
    );
    res.json({
      message: 'NEW USER CREATED!',
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const fetchAllUsers = async (req, res, next) => {
  try {
    let users = await db.any('SELECT * FROM users');
    res.status(200).json({
      status: 'Success',
      message: 'All users have been retrieved.',
      payload: users,
    });
  } catch (error) {
    res.status(404).json({
      status: 'Error',
      message: 'Unable to fetch all users',
      payload: null,
    });
  }
};

module.exports = { createUser, fetchAllUsers };
