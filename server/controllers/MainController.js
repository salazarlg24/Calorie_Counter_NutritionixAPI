var request = require('request');
var options = {
	  url: '',
	  headers: {
	    'x-app-id':'a98f92b3',
	    'x-app-key':'2105299bf1b433965535331ac89305a6'
	  }
};
module.exports = {
	getFood: function (req,res) {
		console.log(req.body.name);

		options["url"] = 'https://trackapi.nutritionix.com/v2/search/instant?query='+req.body.name
		request(options, function (error, response, body) {
		  console.log('error:', error); // Print the error if one occurred
		  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		  // console.log('body:', body);
		  res.json(body)
		});
	}
}