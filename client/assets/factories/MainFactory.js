myApp.factory('MainFactory',['$http',function ($http){
	var factory = {};
	factory.getFood = function(newFood, callback){
		$http.post('/getFood', newFood).then(function(returned_data){
			returned_data = JSON.parse(returned_data.data)
			callback(returned_data);
		})
	}
return factory;
}]);