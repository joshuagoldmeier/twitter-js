var express = require('express');

var app = express();

app.get('/', function(request, response){
	response.send('loading...')
})

app.listen(3000, function(){
	console.log('Were hooked in!')
});