'use strict';
const angular = require('angular');

export class customerFormComponent {
  /*@ngInject*/
  $onInit() {
    this.customer = this.resolve.customer;
  }

  save(form) {
    if(form.$valid) {
      this.close({ $value: this.customer });
    }
  }
}

export default angular.module('customersApp.customers.form', [])
  .component('customerForm', {
    template: require('./customer-form.component.html'),
    bindings: {
      resolve: '<',
      dismiss: '&',
      close: '&'
    },
    controller: customerFormComponent,
    controllerAs: 'vm'
  })
  .name;
