var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var exphbs = require('express-handlebars');
var path = require('path');
var pg = require("pg");
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');



var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.configure('development', function (){
	var connectionString = "/process.env.spiritanimal";
});

app.configure('production', function(){
	var connectionString = "postgres://nvzcpymechjwju:iDlir3fli4ydPDXt7JFafYeLDk@ec2-54-83-58-191.compute-1.amazonaws.com:5432:/d5j26un5thict3";

});

app.use(methodOverride(function (req, res) {
	if(req.body && typeof req.body === 'object' && '_method' in req.body) {
		var method = req.body._method;
		delete req.body._method;
		return method;
	}
}));

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
    console.log("App running on port : ", app.get('port'));
});


app.get('/', function (req, res){
	console.log(process.env.DATABASE_URL);
	pg.connect(connectionString, function (err, client, done){
		client.query('SELECT * FROM western', function (err, result){
			client.query('SELECT * FROM eastern', function (err, result2){
			var data = {
				western : result.rows,
				eastern : result2.rows
			};
			res.render('home', data);							
			});
			done();
			// console.log(data);
			// res.send(data);
			
		});
	});
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

app.post('/form', function (req, res){
	var western = req.body.western 
	var eastern = req.body.eastern 
		// res.render('works', req.body);
		// res.render('works', req.body);

	pg.connect(connectionString, function (err, client, done){
		client.query('select * FROM western_easterns we LEFT JOIN spirit_animals sa on we.spirit_animal_id = sa.id WHERE western_id = $1 AND eastern_id = $2;', [req.body.western, req.body.eastern], function (err, result){
			done();
			var data = {
				name : result.rows[0].name,
				url : result.rows[0].url
			}
			// console.log(data);
			// res.send(result.rows);
			res.render('result', data);
			// res.send(data);
		});
	});	
});











