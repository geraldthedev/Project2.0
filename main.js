/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var app = angular.module('myApp', []);
    var fun = angular.module('myApp', ['ngAnimate']);

    app.controller("myControl", function($scope){
        $scope.madeAgain={
           "background-image": "url('./images/PortBack.jpg')",
            "resize": "both",
            "background-position": "center",
           "background-attachment": "fixed",
         "background-size": "cover"
        }

    });

/* The starting CSS styles for the enter animation */
fun.fade.ng-enter ;{
  transition:0.5;s; linear ;all,
  opacity; 0
}

/* The finishing CSS styles for the enter animation */
fun.fade.ng-enter.ng-enter-active ;{
  opacity:1;
}