var app=angular.module("pmLoginApp",[]);
app.controller("pmLoginController",["$scope","$http",function($scope,$http){


$scope.projectmanagerLogin=function(){
  $http.get("/salesLogin/"+$scope.uname+"/"+$scope.password).success(function(response){

     if(response != null){
         window.location = "ProjectManagerForm.html";
     }else{

     	alert("Username or Password is Incorrect..")
     }

  })
}

}]);