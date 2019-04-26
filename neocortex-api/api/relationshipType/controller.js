const mongoose             = require('mongoose');
const { validationResult } = require('express-validator/check');

const RelationshipType = require('./schema');

exports.create = function(req, res) {
  const errors = validationResult(req);
  if(!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });

  var newRelationshipType = new RelationshipType({
    name: req.body.name,
    creator: req.payload.id
  });
  newRelationshipType.save(function(err, rt) {
    if(err) res.status(500).send({error: err});
    res.status(201).json(rt);
  });
};

exports.findAll = function(req, res) {
  RelationshipType.find(
    {'creator': req.payload.id},
    '_id name createdAt updatedAt',
    function(err, rts) {

    if(err) res.status(500).send({error: err});

    res.json(rts);
  });
};

exports.findByID = function(req, res) {
  RelationshipType.findById(req.params.id, function(err, rt) {
    if(err) res.status(500).send({error: err});
    res.json(rt);
  });
};
