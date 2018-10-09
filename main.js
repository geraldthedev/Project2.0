/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var app = angular.module('myApp', []);
    var app2 = angular.module('myApp2', []);

    app.controller("myControl", function($scope){
        $scope.madeAgain={
           "background-image": "url('./images/PortBack.jpg')",
            "resize": "both",
            "background-position": "center",
           "background-attachment": "fixed",
         "background-size": "cover"
        }

        madeAgain.ng-enter {
  transition:0.5s linear all;
  opacity:0;
}

    });

    app2.controller("anoControl", function($scope){


    });

