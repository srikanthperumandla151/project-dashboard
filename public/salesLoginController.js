var app=angular.module("salesLoginApp",[]);
app.controller("salesLoginController",["$scope","$http",function($scope,$http){


$scope.salesLogin=function(){
  $http.get("/salesLogin/"+$scope.uname+"/"+$scope.password).success(function(response){

     if(response != null){
         window.location = "clientinfo.html";
     }else{

     	alert("Username or Password is Incorrect..")
     }

  })
}

}]);