const mongoose = require('mongoose');
const Session  = require('./schema');

exports.create = function(req, res) {
  console.log(req.body)
  var newSession = new Session(req.body);
  newSession.save(function(err, session) {
    if(err) res.status(500).send({error: err});
    res.status(201).json(session);
  });
};

exports.findByID = function(req, res) {
  Session.findById(req.params.id, function(err, session) {
    if(err) res.status(500).send({error: err});
    res.json(session);
  });
};
