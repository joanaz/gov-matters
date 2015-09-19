app.config(function($stateProvider) {
  $stateProvider.state('write', {
    url: '/start-a-petition',
    templateUrl: 'js/write/write.html',
    controller: ($scope, PetitionFactory, RepFactory) => {
      $scope.reps = RepFactory.getAllReps()
      $scope.petition = {}
      $scope.submit = function() {
        PetitionFactory.addPetition($scope.petition)
      }
      $scope.repSelected = function(id) {
        $scope.petition.repId = id
      }
    }
  });
});