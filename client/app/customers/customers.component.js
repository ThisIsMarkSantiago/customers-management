'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './customers.routes';
import ModalService from '../../components/modal/modal.service';
import form from './customer-form/customer-form.component';

export class CustomersComponent {
  customers = [];

  /*@ngInject*/
  constructor(firebase, $uibModal, Modal) {
    angular.extend(this, {
      firebase,
      $uibModal,
      Modal
    });
  }

  $onInit() {
    this.customers = this.firebase.getList('customers');
    this.deleteCustomer = this.Modal.confirm.delete(customerInstance => {
      this.customers.$remove(customerInstance)
        .then(
          () => this.Modal.alert.success()('Customer successfully deleted!'),
          () => this.Modal.alert.success()('An error occured deleting the customer!')
        );
    });
  }

  openCustomerForm(customer) {
    const modalInstance = this.$uibModal
      .open({
        component: 'customerForm',
        resolve: {
          customer: () => customer
        }
      });

    modalInstance
      .result
      .then(result => {
        this.customers[result.$id ? '$save' : '$add'](result)
          .then(
            () => this.Modal.alert.success()(`Customer successfully ${result.$id ? 'upd' : 'cre'}ated!`),
            () => this.Modal.alert.success()(`An error occured ${result.$id ? 'upd' : 'cre'}ating the customer!`)
          );
      });
  }
}

export default angular.module('customersApp.customers', [uiRouter, form, ModalService])
  .config(routes)
  .component('customers', {
    template: require('./customers.html'),
    controller: CustomersComponent,
    controllerAs: 'vm'
  })
  .name;
