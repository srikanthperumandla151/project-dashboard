var app=angular.module("pmRegApp",[]);
app.controller("pmRegController",["$scope","$http",function($scope,$http){


$scope.pmSave=function(){
$http.post('/salesReg',$scope.sales).success(function(res){

    if(res!=null)
    {      
      window.location='projectman.html';
    }
	})
}

}]);