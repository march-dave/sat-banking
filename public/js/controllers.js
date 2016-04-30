'use strict';

var app = angular.module('bankingApp');

app.controller('homeCtrl', function($q, $http) {
  console.log('homeCtrl');
});

app.controller('accountCtrl', function($scope, $state, transactions) {
  $scope.transactions = transactions;

  $scope.balance = $scope.totalCredit = $scope.totalDebit = 0;

  transactions.forEach(transaction => {
    var value = transaction.value;
    $scope.balance += value;

    if(value > 0) {
      $scope.totalCredit += value;
    } else {
      $scope.totalDebit += value;
    }
  })

});

app.controller('newTransactionCtrl', function($scope, $state, Transaction, SweetAlert) {
  console.log('newTransactionCtrl');

  $scope.type = 'credit';

  $scope.addTransaction = () => {
    var newTrans = angular.copy($scope.newTransaction);
    if($scope.type === 'debit') {
      newTrans.value *= -1;
    };
    Transaction.create(newTrans)
      .then(() => {
        $state.go('account');
      })
      .catch(err => {
        SweetAlert.swal('Oh no!', err.data, 'error');
      });
  }

});
