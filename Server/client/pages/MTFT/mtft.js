angular.module("mtftModule", ['ngMaterial'])
  .controller('MTFTCtrl', function ($rootScope, $scope, $http, $mdDialog) {
    $scope.widthScreen = window.innerWidth;
    $scope.list = true;
    $scope.code = false;
    $scope.codeNumber = "";
    $scope.users = [];
    $scope.totalArbres = 0;
    $scope.refresh = function () {
      $http.get('http://www.veronia.tn/mtft/ws_codes').then(function (response) {
        if (response.data.value) $scope.codeNumber = response.data.value.toString();
        else $scope.codeNumber = "";
      })
      $http.get('http://www.veronia.tn/mtft/ws_users').then(function (response) {
        $scope.users = response.data;
        for(var userIndex in $scope.users){
          var user = $scope.users[userIndex];
          $scope.totalArbres += parseInt(user.totalArbres);
        }
      })
    }
    $scope.refresh();

    $scope.deleteCoord = function ($event, image, idUser) {
      var confirm = $mdDialog.confirm()
        .title('Voulez vous supprimer cette image de la base de données?')
        .textContent('Si vous cliquez sur OK, cette image sera supprimée définitivement de la base de données.')
        .targetEvent($event)
        .ok('OK')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function () {

        $http.post('http://www.veronia.tn/mtft/ws_users/image/delete', {
          "image": image,
          "idUser": idUser
        }).then(function (response) {
          $scope.refresh();
        })
      }, function () {});
    }
    $scope.numberWithCommas = function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  });