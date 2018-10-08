/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createdApp(){
    var app = angular.module("myApp", []);

    app.controller("myControl", function($scope){
        $Scope.madeAgain={
           "background-color" : "blue"
        }

    });
}