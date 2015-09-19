app.config(function($stateProvider) {
  $stateProvider.state('rep', {
    url: '/rep/:id',
    templateUrl: 'js/rep/rep.html',
    controller: ($scope, $stateParams, PetitionFactory, RepFactory) => {
      $scope.petitions = PetitionFactory.getRepsPetitions($stateParams.id)
      $scope.rep = RepFactory.getOneRep($stateParams.id)
    }
  });
});