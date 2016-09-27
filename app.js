var express = require('express');
const volleyball = require('volleyball')



var app = express();

app.use(volleyball)

app.use('/', function(request, response, next){
	console.log(request.method);
	next();
})

app.use('/special/', function(request, response, next){
	console.log("you have reached special area");
	next();
})

app.get('/', function(request, response){
	response.send('loading...')
})

app.get('/news', function(request, response){
	response.send('There is no important news today')
})

app.listen(3000, function(){
	console.log('Were hooked in!')
});