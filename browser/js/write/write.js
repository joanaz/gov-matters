app.config(function($stateProvider) {
  $stateProvider.state('write', {
    url: '/start-a-petition',
    templateUrl: 'js/write/write.html',
    controller: ($scope, $state, PetitionFactory, RepFactory) => {
      $scope.reps = RepFactory.getAllReps()
        // $scope.categories = RepFactory.getAllCategories()
      $scope.categories = ["Transportation", "Environment", "Economy", "Criminal Justice", "Health", "Education", "Labor", "Public Safety", "Public Services"]

      $scope.petition = {
        numOfSupporters: 0
      }
      $scope.submit = function() {
        PetitionFactory.addPetition($scope.petition)
        console.log($scope.petition)
        $state.go('browse')
      }
      $scope.repSelected = function(id) {
        $scope.petition.repId = id
      }

      // $scope.categorySelected = function(category) {
      //   console.log(category)
      //   $scope.petition.type = category
      // }
    }
  });
});