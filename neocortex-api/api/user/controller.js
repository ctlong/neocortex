const mongoose             = require('mongoose');
const crypto               = require('crypto');
const { validationResult } = require('express-validator/check');

const User = require('./schema');

exports.register = (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });

  var newUser = new User({
    email: req.body.email,
    name: req.body.name,
    salt: crypto.randomBytes(16).toString('hex'),
    password: req.body.password
  });

  newUser.save((err, user) => {
    if(err) return res.status(500).json({error: err.message});
    
    res.status(201).json(User.toAuthJSON(user));
  });
};

exports.login = function(req, res) {
  const errors = validationResult(req);
  if(!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });

  User.findOne({email: req.body.email}, function(err, user) {
    if(err) return res.status(500).send({error: err.message});

    if(!User.validatePassword(user, req.body.password))
      return res.status(400).send({error: 'invalid password'});

    res.json(User.toAuthJSON(user));
  });
};
