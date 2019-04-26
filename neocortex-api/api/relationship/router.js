const express      = require('express');
const Relationship = require('./controller');

const router = express.Router();

router.route('/')
  .post(Relationship.create)
  .get(Relationship.findAll)

router.route('/:id')
  .get(Relationship.findByID)

module.exports = router;
