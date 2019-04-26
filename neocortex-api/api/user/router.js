const express   = require('express');
const { check } = require('express-validator/check');

const User = require('./controller');

const router = express.Router();

router.route('/login')
  .post([
      check('email').isEmail()
    ], User.login)

router.route('/register')
  .post([
      check('email').isEmail()
    ], User.register)

module.exports = router;
