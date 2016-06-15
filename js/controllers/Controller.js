app.controller('Controller', ['$scope', "search", function($scope, search) {

    $scope.results = [];

      $scope.type = function () {
        var val = $scope.myValue;

        search.update(val).success(function(data) {

          data.map(function(film) {
            if (film.description === "") {
              film.description = "No Synopsis Available";
            }
          });

          $scope.results = data;
        });
      };

}]);
