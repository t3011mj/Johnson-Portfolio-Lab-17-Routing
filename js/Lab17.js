var app = angular.module("ShowCatsandDogs");

app.config(function($routeProvider) {

	$routeProvider.when('/view1', {
		templateUrl: 'html/Cat.html',
		controller: 'routeCtrl'
	});

	$routeProvider.when('/view2', {
		templateUrl: 'html/Dog.html',
		controller: 'routeCtrl'
	});

$routeProvider.when('/view3', {
		templateUrl: 'html/Ferret.html',
		controller: 'routeCtrl'
	});

$routeProvider.when('/view4', {
		templateUrl: 'html/Walrus.html',
		controller: 'routeCtrl'
	});

$routeProvider.when('/view5', {
		templateUrl: 'html/OtherCat.html',
		controller: 'routeCtrl'
	});

});

