var app=angular.module("clientApp",[]);
app.controller("clientController",["$scope","$http",function($scope,$http){


$scope.saveClientData=function(){
alert("hi....")
$http.post('/clientdetails',$scope.client).success(function(res){
       console.log(res);
       $scope.client = "";
  	})
}


}]);