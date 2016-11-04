var app=angular.module("projectclient",[]);
app.controller("clientretrive",["$scope","$http",function($scope,$http){
	
	$http.get("/clientinfos").success(function(response){
		$scope.client_info=response;		
	});


	$scope.select = function(id){
		$http.get("/clientInfo/"+id).success(function(response){
			$scope.client = response;
		})
	}

	$scope.addmember = function(){
      $http.post("/projectmembers",$scope.client).success(function(response){
          console.log(response);
      })
	}
    

    $scope.pmLogOut = function(){

    	window.location = "index.html";
    }


}]);