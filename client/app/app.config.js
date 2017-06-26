'use strict';

import firebase from 'firebase';

export function routeConfig($urlRouterProvider, $locationProvider, appConfig) {
  'ngInject';

  firebase.initializeApp(appConfig.firebase);

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
}
