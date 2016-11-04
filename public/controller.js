var myapp = angular.module("myApp",[]);

myapp.controller("myController", ["$scope", "$http", function($scope, $http){

   /*$scope.names = ["contract", "permanent"];*/


   
        $scope.saveClientData = function(){
           $http.post("/clientList", $scope.client).success(function(response){
           console.log(response);
           $scope.client = "";
        })
      }

   

}])