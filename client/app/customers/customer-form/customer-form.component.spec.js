'use strict';

describe('Component: customerForm', function() {
  // load the component's module
  beforeEach(module('customersApp.customers'));

  var customerFormComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    customerFormComponent = $componentController('customerForm', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
