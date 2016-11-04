var app=angular.module("hrRegApp",[]);
app.controller("hrRegController",["$scope","$http",function($scope,$http){


$scope.hrLogin=function(){
$http.post('/salesReg',$scope.sales).success(function(res){

    if(res!=null)
    {      
      window.location='hrLogin.html';
    }
	})
}

}]);