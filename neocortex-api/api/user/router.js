const express   = require('express');
const { check } = require('express-validator/check');

const User = require('./controller');

const router = express.Router();

router.route('/login')
  .post([
      check('email').isEmail().normalizeEmail(),
      check('password').length({min: 8}).trim().escape()
    ], User.login)

router.route('/register')
  .post([
      check('email').isEmail().normalizeEmail(),
      check('password').length({min: 8}).trim().escape(),
      check('name').isLength({min: 1}).trim().escape()
    ], User.register)

module.exports = router;
