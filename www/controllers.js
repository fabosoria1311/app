angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Sigsipamba', id: 1 },
    { title: 'Cuyuja', id: 2 },
    { title: 'Chimborazo', id: 3 },
    { title: 'Santa Clara', id: 4 },
    { title: 'Rinconada', id: 5 },
    { title: 'La Perrera', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})