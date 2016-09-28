var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', function (req, res) {
  
//   //res.sendFile('/static/stylesheets/style.css')
//   //res.sendFile(path.join(__dirname, '/public/stylesheets/style.css'));
  
// });


module.exports = router;