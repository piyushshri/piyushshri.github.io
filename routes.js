/**
 * @author Piyush Shrivastava
 */

var appModule = angular.module("appModule", ['ngRoute', 'ui.bootstrap', 'ngSanitize']);

appModule.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.
    when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeController'
    }).
    when('/skills', {
        templateUrl: 'view/skills.html',
        controller: 'SkillsController'
    }).
    when('/experience', {
        templateUrl: 'view/experience.html',
        controller: 'ExperienceController'
    }).
    when('/projects', {
        templateUrl: 'view/projects.html',
        controller: 'ProjectsController'
    }).
    when('/education', {
        templateUrl: 'view/education.html',
        controller: 'EducationController'
    }).
    when('/achievements', {
        templateUrl: 'view/achievements.html',
        controller: 'AchievementsController'
    }).
    when('/personal-info', {
        templateUrl: 'view/personal-info.html',
        controller: 'PersonalInfoController'
    }).
    when('/resume', {
        templateUrl: 'view/resume.html',
        controller: 'ResumeController'
    }).
    otherwise({
        redirectTo: '/'
    });
});