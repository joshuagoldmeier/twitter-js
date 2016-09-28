var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res){
	var name = req.params.name;
	var tweets = tweetBank.find({name: name});
	res.render( 'index', {tweets: tweets});

});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

// router.get('/stylesheets/style.css', function (req, res) {
  
//   res.sendFile('/public/stylesheets/style.css')
//   // res.sendFile('/stylesheets/style.css')
//   //res.sendFile('/static/stylesheets/style.css')
//   //res.sendFile(path.join(__dirname, '/public/stylesheets/style.css'));
  
// });


module.exports = router;