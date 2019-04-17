const express = require('express');
const router  = express.Router();

const user  = require('./model/User/router');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* USE user router. */
router.use('/user', user);

module.exports = router;
