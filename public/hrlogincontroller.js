var app=angular.module("hrLoginApp",[]);
app.controller("hrLoginController",["$scope","$http",function($scope,$http){


$scope.hrLogin=function(){
  $http.get("/salesLogin/"+$scope.uname+"/"+$scope.password).success(function(response){

     if(response != null){
         window.location = "hrform.html";
     }else{

     	alert("Username or Password is Incorrect..")
     }

  })
}

}]);