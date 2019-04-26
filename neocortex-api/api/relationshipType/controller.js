const mongoose = require('mongoose');

const RelationshipType = require('./schema');

exports.findByID = function(req, res) {
  RelationshipType.findById(req.params.id, function(err, rt) {
    if(err) res.status(500).send({error: err});
    res.json(rt);
  });
};
