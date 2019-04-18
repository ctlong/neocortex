const mongoose = require('mongoose');
const User     = require('./schema');

exports.create = function(req, res) {
  console.log(req.body)
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if(err) res.send(err);
    res.json(user);
  });
};

exports.findByID = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) res.send(err);
    res.json(user);
  });
};
