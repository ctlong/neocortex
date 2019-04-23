const mongoose = require('mongoose');
const User     = require('./schema');

exports.create = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if(err) res.status(500).send({error: err});
    res.status(201).json(user);
  });
};

exports.findByID = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) res.status(500).send({error: err});
    res.json(user);
  });
};
