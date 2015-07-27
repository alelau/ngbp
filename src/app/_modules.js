angular.module('ngbp', ['ui.router', 'templates-common', 'ngBoilerplate.home', 'ngBoilerplate.about', 'templates-app'])

.constant('app', 'ngbp')

.constant('VERSION', '0.3.2')

.constant('ENV', {name:'development',apiEndpoint:'http://dev.server.com'})

;