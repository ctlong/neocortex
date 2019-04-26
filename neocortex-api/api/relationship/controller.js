const mongoose     = require('mongoose');
const Relationship = require('./schema');

exports.create = function(req, res) {
  var newRelationship = new Relationship(req.body);
  newRelationship.save(function(err, relationship) {
    if(err) res.status(500).send({error: err});
    res.status(201).json(relationship);
  });
};

exports.findAll = function(req, res) {
  Relationship
    .find({'userID': req.payload._id})
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
