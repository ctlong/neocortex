const express = require('express');

const RelationshipType = require('./controller');

const router = express.Router();

router.route('/:id')
  .get(RelationshipType.findByID)

module.exports = router;
