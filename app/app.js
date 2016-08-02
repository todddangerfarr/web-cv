// angular module
(function(){ // wrapping the function in a closure **good habit
  var app = angular.module('webCv', ['cv-directives']);

  // Web CV controller to populate info variable
  app.controller('InformationController', ['$http', function($http) {
    var cv = this;
    cv.info = [];
    $http.get('../assets/data/information.json').success(function(data) {
      cv.info = data;
    });
  }]);

})();
