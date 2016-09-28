var express = require('express');
const volleyball = require('volleyball')
var nunjucks = require('nunjucks')
var routes = require('./routes/');

nunjucks.configure('views'); // point nunjucks to the proper directory for templates

var app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use(volleyball)
app.use('/', routes);
app.use('/static', express.static(__dirname + '/public'));

app.listen(3000, function(){
	console.log('Were hooked in!')
});


// app.get('/', function(request, response){
// 	//response.send('loading...')
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	response.render( 'index', {title: 'Hall of Fame', people: people} );
// })
