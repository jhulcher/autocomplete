app.factory('search', ['$http', function($http) {

  return {
    update: function(val) {

      if (val === "") {
        val = "empty-string-returns-nil";
      }

      return $http.jsonp("https://www.slated.com/films/autocomplete/profiles/?callback=JSON_CALLBACK", {params : {term: val}}
                ).success(function(data) {
                  return data;
                })
                .error(function(err) {
                  return err;
                });
    }
  }
}]);
