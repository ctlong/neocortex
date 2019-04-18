const express = require('express');
const router  = express.Router();

const user = require('./api/user/router');

// home page
router.get('/', function(req, res, next) {
  res.json({message: 'neocortex-api'});
});

// api routes
router.use('/users', user);

// 404
router.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = router;
