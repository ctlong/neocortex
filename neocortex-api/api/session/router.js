const express = require('express');
const router = express.Router();
const Session = require('./controller');

router.route('/')
  .post(Session.create)

router.route('/:id')
  .get(Session.findByID)

module.exports = router;
