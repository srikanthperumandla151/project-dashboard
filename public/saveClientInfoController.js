var myapp = angular.module("saveClientApp",[]);

myapp.controller("saveClentController", ["$scope", "$http", function($scope, $http){
     
        $scope.saveClientData = function(){
           $http.post("/saveClentInfo", $scope.client).success(function(response){
           console.log(response);
           $scope.client = "";
        })
      }

      $scope.salesLogOut = function(){
      	 window.location = "index.html";
      }

   

}])