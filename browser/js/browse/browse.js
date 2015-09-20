app.config(function($stateProvider) {
  $stateProvider.state('browse', {
    url: '/browse',
    templateUrl: 'js/browse/browse.html',
    controller: ($scope, PetitionFactory, RepFactory) => {
      $scope.petitions = PetitionFactory.getAllPetitions()
      $scope.reps = RepFactory.getAllReps()
      console.log($scope.reps)
        // RepFactory.getCities();
      //RepFactory.getRepsByZipcode(31023)
    }
  });
});