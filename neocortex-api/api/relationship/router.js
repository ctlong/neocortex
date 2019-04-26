const express   = require('express');
const mongoose  = require('mongoose');
const { check } = require('express-validator/check');

const Relationship = require('./controller');

const router = express.Router();

router.route('/')
  .post([
    check('name').isLength({min: 1}).trim().escape(),
    check('relationshipType').custom(id => {
      console.log(mongoose.Types.ObjectId.isValid(id));
      if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Not a valid relationshipType');
      }
      return true;
    })
  ], Relationship.create)
  .get(Relationship.findAll)

router.route('/:id')
  .get(Relationship.findByID)

module.exports = router;
