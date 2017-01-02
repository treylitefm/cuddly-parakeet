(function() {
    var app = angular.module('app', ['ngRoute'])
    app.config(function($routeProvider) {
        $routeProvider
            .when('/newsletter', {
                templateUrl: '/static/html/newsletter.html',
                controller: 'NewsletterController'
            })
            .when('/', {
                templateUrl: '/static/html/home.html',
                controller: 'NewsletterController'
            })
    })
})()
