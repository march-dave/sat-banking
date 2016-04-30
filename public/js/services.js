'use strict';

var app = angular.module('bankingApp');

app.service('Transaction', function($http, $q) {

  this.getAll = () => {
    return $http.get('/api/transactions')
    .then(res => {
      return $q.resolve(res.data);
    });
  };
  
  this.create = newTransaction => {
    return $http.post('/api/transactions', newTransaction);
  };
});
