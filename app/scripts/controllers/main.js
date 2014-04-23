'use strict';

angular.module('tldrApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.url="";
    $scope.submitted=false;

    $scope.submitForm = function(isValid) {
    		$scope.submitted=true;
			// check to make sure the form is completely valid
			if (isValid) {
				alert('our form is amazing');
			}

		};




  });
