var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var exphbs = require('express-handlebars');
var path = require('path');
var pg = require("pg");
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var connectionString = "pg://localhost/spiritanimal";

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(methodOverride(function (req, res) {
	if(req.body && typeof req.body === 'object' && '_method' in req.body) {
		var method = req.body._method;
		delete req.body._method;
		return method;
	}
}));

app.listen(3000);


app.get('/', function (req, res){
	res.render('home')
});

//this route returns values from an API in the form of JSON
// app.get('/batman', function (req, res) {
//   request('http://www.omdbapi.com/?s=batman&y=&plot=short&r=json', function (err, response, body) {
//     var results = JSON.parse(body)["Search"]
//     // res.send(results)
//     res.render('batman')
//   });
// });

// this brings me back the entire HTML
// app.get('/spirit', function (req, res) {
//   request('http://www.primalastrology.com/unicorn.html', function (err, response, body) {
//   	var $ = cheerio.load(body);
//     res.send(results)
//   });
// });

//values selected by dropdowns responsive when submitted
// app.post('/form', function (req, res){
// 	if (req.body.western == 'aquarius' && req.body.eastern == 'dog'){
// 		res.render('works', req.body);
// 	}
// })

app.post('/form', function (req, res){
	var western = req.body.western 
	var eastern = req.body.eastern 
		// res.render('works', req.body);
		// res.render('works', req.body);
		res.send(req.body)	
	pg.connect(connectionString, function (err, client, done){
		//just texting to see if connection works
		client.query('SELECT * FROM western', [req.body.western], function (err, result){
			done();
			// var data = result.rows;
			// console.log(data);
		});
	});
});








