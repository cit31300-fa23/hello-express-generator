var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hi from users router!?!?!?!?!?!?!?!?!?!');
  res.render('users', {username: 'Rob'});
});

module.exports = router;
