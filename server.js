var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.listen(3000);

var request = require('request');
var cheerio = require('cheerio');

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

var animal = "unicorn"

var poo = request('http://www.primalastrology.com/' + animal + '.html', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('p').each(function(i, element){
      var a = $(this).prev();
      // console.log(a.text()).toJSON());

    	if (IsJsonString(JSON.stringify(a.text()))) {
    		console.log(JSON.stringify(a.text()));
    	}
    	else {
    		console.log('this is not JSON');	
    	}
    });
  }
});

app.get('/', function (req, res){
	res.send(poo);
});

app.get('/batman', function (req, res) {
  request('http://www.omdbapi.com/?s=batman&y=&plot=short&r=json', function (err, response, body) {
    var results = JSON.parse(body)["Search"]
    res.send(results)
    res.render('batman')
  });
});

app.get('/animalz', function (req, res){
	res.render('animalz');
});

app.get('/spirit', function (req, res) {
  request('http://www.primalastrology.com/unicorn.html', function (err, response, body) {
    // var results = JSON.parse(body)
    var results = body
    res.send(results)
  });
});






