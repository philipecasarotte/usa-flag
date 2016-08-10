require('angular')
var MainController = require('./controllers/MainController')
var CountryController = require('./controllers/CountryController')

var app = angular.module('app', [])
app.controller('MainController', ['$scope', MainController])