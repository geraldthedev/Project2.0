/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var app = angular.module('myApp', []);

    app.controller("myControl", function($scope){
        $scope.madeAgain={
<<<<<<< HEAD
           "background-image": "url('./images/PortBack.jpg')",
=======
           "background-image": "url('./images/PortBack.jpeg')",
>>>>>>> 6cc37b57c325fae4bc943b6c536f5337939543b9
            "resize": "both",
        "background-position": "center",
           "background-attachment": "fixed",
         "background-size": "cover",
        }

    });
