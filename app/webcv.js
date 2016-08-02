// An ANGULAR MODULE for the webcv display
(function() {
  var app = angular.module('cv-directives', []);

  // TEMPLATE DIRECTIVES
  app.directive('experience', function() {
    return {
      restrict: 'E',
      templateUrl: "app/components/webcv/work-experience.html"
    };
  });

})();
