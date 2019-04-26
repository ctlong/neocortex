const express = require('express');
const jwt     = require('express-jwt');

const router = express.Router();

const secret = require('./config').secret;

const user             = require('./api/user/router');
const relationshipType = require('./api/relationshipType/router');
const relationship     = require('./api/relationship/router');

// home page
router.get('/', (req, res, next) => {
  res.json({message: 'neocortex-api'});
});

// api routes
router.use('/users', user);
router.use('/relationship-types', jwt({
  secret: secret,
  userProperty: 'payload'
}), relationshipType);
router.use('/relationships', jwt({
  secret: secret,
  userProperty: 'payload'
}), relationship);


// 404
router.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = router;
