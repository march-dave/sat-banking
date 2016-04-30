'use strict';

var app = angular.module('bankingApp', ['ui.router', 'ui.bootstrap', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('account', {
      url: '/account',
      templateUrl: '/html/account.html',
      controller: 'accountCtrl',
      resolve: {
        transactions: function(Transaction) {
          return Transaction.getAll();
        }
      }
    })
    .state('newTransaction', {
      url: '/newTransaction',
      templateUrl: '/html/newTransaction.html',
      controller: 'newTransactionCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
