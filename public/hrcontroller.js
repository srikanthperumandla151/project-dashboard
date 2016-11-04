var app = angular.module("projectHrApp",[]);


app.controller("projectHrCOntroller",["$scope","$http", function($scope,$http){

    $http.get("/projectToHr").success(function(response){
        $scope.client_info = response;
    })

/*app.controller("candidatecontroller",function($scope,$http){
	$http.get("/candidate.json").success(function(response){
		$scope.candidates=response;
	})*/
	$scope.hrLogOut=function(){
		window.location="index.html"
	}

	 $http.get("/candidateinfo").success(function(response){
        $scope.candidatesinfo = response;
    })
	

	$scope.addcandidate = function(id){
		$http.get("/candidateinfo/"+id).success(function(response){
			$scope.candidate = response;
		})
	}

     $scope.addCandidates = function(){
     	$http.post('/saveCandidate',$scope.candidate).success(function(res){
       console.log(res);
       $scope.candidate = "";
  	})
     }

}])