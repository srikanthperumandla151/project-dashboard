var app=angular.module("salesApp",[]);
app.controller("saleController",["$scope","$http",function($scope,$http){


$scope.saveSales=function(){
alert("hi....")
$http.post('/salesReg',$scope.sales).success(function(res){

		console.log('entered into signup controller');
		console.log($scope.sales)
    if(res!=null)
    {
      alert("Registered successfully");
      window.location='loginsale.html';
    }
	})
}

}]);