var app=angular.module("salesApp",[]);
app.controller("saleController",["$scope","$http",function($scope,$http){


$scope.saveSales=function(){
$http.post('/salesReg',$scope.sales).success(function(res){

    if(res!=null)
    {      
      window.location='loginsale.html';
    }
	})
}

}]);