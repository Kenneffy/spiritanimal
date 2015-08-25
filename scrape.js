var request = require('request');
var cheerio = require('cheerio');
//test function
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

request('http://www.primalastrology.com/', function (error, response, html) {
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
//original function
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
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
