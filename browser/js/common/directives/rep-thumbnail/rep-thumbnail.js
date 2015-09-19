app.directive('repThumbnail', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/rep-thumbnail/rep-thumbnail.html',
    scope: {
      rep: '='
    }
  };
});