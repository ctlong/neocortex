const express = require('express');
const router = express.Router();
const User = require('./controller');

router.route('/')
  .post(User.create)

router.route('/:id')
  .get(User.findByID)

module.exports = router;
