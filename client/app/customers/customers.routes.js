'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('customers', {
      url: '/customers',
      template: '<customers></customers>'
    });
}
