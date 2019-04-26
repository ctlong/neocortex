const mongoose      = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const crypto        = require('crypto');
const jwt           = require('jsonwebtoken');

const config = require('../../config');

const Schema   = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    unique: true,
    index: true
  },
  name: String,
  emailConfirmed: {
    type: Boolean,
    default: false
  },
  password: String,
  salt: String
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken'});

UserSchema.pre('save', function(next) {
  if(!this.isModified('password')) return next();

  this.password = crypto
    .pbkdf2Sync(this.password, this.salt, 10000, 512, 'sha512')
    .toString('hex');

  next();
});

UserSchema.statics.validatePassword = function(user, password) {
  return user.password === crypto
    .pbkdf2Sync(password, user.salt, 10000, 512, 'sha512')
    .toString('hex');
};

UserSchema.statics.toAuthJSON = function(user) {
  var today = new Date();
  var exp   = new Date(today);
  exp.setDate(today.getDate() + 60);

  return {
    email: user.email,
    name: user.name,
    token: `Bearer ${jwt.sign({
                      id: user._id,
                      email: user.email,
                      exp: parseInt(exp.getTime() / 1000)
                     }, config.secret)}`
  };
};

module.exports = mongoose.model('User', UserSchema);
