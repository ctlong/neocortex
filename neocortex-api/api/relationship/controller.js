const mongoose             = require('mongoose');
const { validationResult } = require('express-validator/check');

const Relationship = require('./schema');

exports.create = function(req, res) {
  const errors = validationResult(req);
  if(!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });

  var newRelationship = new Relationship({
    name: req.body.name,
    creator: req.payload.id,
    relationshipType: req.body.relationshipType
  });
  newRelationship.save(function(err, relationship) {
    if(err) res.status(500).send({error: err});
    res.status(201).json(relationship);
  });
};

exports.findAll = function(req, res) {
  Relationship
    .find({'creator': req.payload.id})
    .populate('relationshipType')
    .exec(function(err, relationships) {
      if(err) res.status(500).send({error: err});
      res.json(relationships);
    });
};

exports.findByID = function(req, res) {
  Relationship
  .findById(req.params.id)
  .populate('relationshipType')
  .exec(function(err, relationship) {
    if(err) res.status(500).send({error: err});
    res.json(relationship);
  });
};
