/**
 * @author Piyush Shrivastava
 * @copyright Creative Commons 2018
 */

var appModule = angular.module("appModule", ['ngRoute']);

appModule.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.
    when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeController'
    }).
    when('/resume', {
        templateUrl: 'view/resume.html',
        controller: 'ResumeController'
    }).
    otherwise({
        redirectTo: '/'
    });
});