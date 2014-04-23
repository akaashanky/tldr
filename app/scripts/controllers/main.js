'use strict';

angular.module('tldrApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.url="";
    $scope.submitted=false;
    $scope.title="Lorem Ipsum";
    $scope.summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, deleniti, quis, hic autem eius saepe dolore eum accusantium nostrum pariatur labore officiis aliquam quas deserunt quo consequatur itaque ea animi!";

    $scope.submitForm = function(isValid) {
    		$scope.submitted=true;
			// check to make sure the form is completely valid
			if (isValid) {
				var formData={};
				formData.url=$scope.url;

				$http.post('/api/summary', formData)
					.success(function(data) {
						$scope.title=data.title;
						$scope.summary=data.summary;
					})
					.error(function(data){
						$scope.title="Whoops!"
						$scope.summary="Looks like something went wrong when summarizing the contents of the given URL. The summarizer is designed to work with URLs of articles/blog posts, but it's also possible that it was unable to glean the right contents from the page. Sorry!"
					});
			}

		};




  });
