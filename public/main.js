/**
 * Created by uvashish on 9/20/15.
 */
//var app = angular.module('superbowlApp', ["customFilters"]);
//
//app.controller("MainCtrl", function($scope, $http){
//
//    $scope.name = "SUPERBOWL AGENDA ITEMS ";
//
//    $http.get('/api/v1/agenda')
//        .success(function(data) {
//            $scope.agendaItems = data;
//            console.log(data)
//        })
//        .error(function(data) {
//            console.log('Error: ' + data);
//        });
//
//    $scope.createAgendaItem = function(){
//
//        //$http.post('/api/v1/agenda', $scope.formData)
//        //    .success(function(data) {
//        //        $scope.formData = {};
//        //        $scope.agendaItems = data;
//        //        console.log(data);
//        //    })
//        //    .error(function(data) {
//        //        console.log('Error:' + data);
//        //    });
//
//    };
//
//    $scope.deleteAgendaItem = function(id) {
//        $http.delete('/api/v1/agenda/' + id)
//            .success(function(data) {
//                $scope.agendaItems = data;
//                console.log(data);
//            })
//            .error(function(data) {
//                console.log('Error:' + data);
//            });
//    };
//
//
//
//});