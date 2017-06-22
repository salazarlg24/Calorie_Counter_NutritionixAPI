
var main = require('../controllers/MainController.js')

module.exports = function(app) {

	app.post('/getFood', function(req,res){
		main.getFood(req,res);
	});

}