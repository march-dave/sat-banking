'use strict';

var app = angular.module('bankingApp');

app.filter('abs', function() {
  return input => Math.abs(input);
});
