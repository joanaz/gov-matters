app.config(function($stateProvider) {
  $stateProvider.state('petition', {
    url: '/petition/:id',
    templateUrl: 'js/petition/petition.html',
    controller: ($scope, $stateParams, PetitionFactory, RepFactory) => {
      console.log($stateParams.id)
      $scope.petition = PetitionFactory.getOnePetition($stateParams.id)
      $scope.rep = RepFactory.getOneRep($scope.petition.rep)
    }
  });
});