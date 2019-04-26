const express   = require('express');
const { check } = require('express-validator/check');

const RelationshipType = require('./controller');

const router = express.Router();

router.route('/')
  .post([
    check('name').isLength({min: 1}).trim().escape()
  ], RelationshipType.create)
  .get(RelationshipType.findAll)

router.route('/:id')
  .get(RelationshipType.findByID)

module.exports = router;
