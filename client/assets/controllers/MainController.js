myApp.controller('MainController',['$scope','MainFactory','$location','$cookies',function ($scope,MainFactory,$location,$cookies){
	$scope.foodList = [];
	$scope.totalCal = 0;

	$scope.add = function(){
		console.log("This")
		// var mystring = $scope.newFood.name
		// var newString = mystring.replace(/↵/g, "%0A")
		// console.log(newString)
		// $scope.newFood.name = newString
		MainFactory.getFood($scope.newFood, function(data){
			console.log(data.branded)
			$scope.foodList.push(data.branded[0])
			$scope.totalCal += data.branded[0].nf_calories
		})
	}
}])