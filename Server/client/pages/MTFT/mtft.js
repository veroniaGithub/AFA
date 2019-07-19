angular.module("mtftModule", ['ngMaterial'])
.controller('MTFTCtrl',function($rootScope,$scope,$http,$mdDialog) {
  $scope.widthScreen = window.innerWidth;
  $scope.list = true;
  $scope.code = false;
  $scope.codeNumber = "";
  $scope.users = [];
  $scope.refresh = function(){
    $http.get('http://www.veronia.tn/mtft/ws_codes').then(function(response){
      console.log(response.data.value.toString());
      if(response.data.value) $scope.codeNumber = response.data.value.toString();
      else   $scope.codeNumber = "";
    })
    $http.get('http://www.veronia.tn/mtft/ws_users').then(function(response){
      console.log(response.data);
      $scope.users = response.data;
    })
  }
  $scope.refresh();
  $scope.deleteCoord = function($event,user,coord){
    var confirm = $mdDialog.confirm()
      .title('Voulez vous supprimer cette image de la base de données?')
      .textContent('Si vous cliquez sur OK, cette image sera supprimée définitivement de la base de données.')
      .targetEvent($event)
      .ok('OK')
      .cancel('Cancel');

    $mdDialog.show(confirm).then(function() {
      console.log('deleted');
    }, function() {
      console.log('kept');

    });
    console.log(user);
    console.log(coord);
  }
});
