var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('triangle', {
    url: "/triangle",
    templateUrl: "partials/triangle.html"
  });

  $stateProvider.state('rps', {
    url: "/rps",
    templateUrl: "partials/rps.html"
  });

  $stateProvider.state('square', {
    url: "/square",
    templateUrl: "partials/square.html"
  });

});
