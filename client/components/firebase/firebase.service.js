'use strict';
const angular = require('angular');

import firebase from 'firebase';

/*@ngInject*/
export function firebaseService($firebaseArray, $firebaseObject) {
  const getList = model => {
    const reference = firebase
      .database()
      .ref()
      .child(model);
    return $firebaseArray(reference);
  };

  const getOne = model => {
    const reference = firebase
      .database()
      .ref()
      .child(model);
    return $firebaseObject(reference);
  };

  return {
    getModule: firebase.database().ref().child,
    getOne,
    getList
  };
}

export default angular.module('customersApp.firebase', [])
  .factory('firebase', firebaseService)
  .name;
