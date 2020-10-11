// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  VAPID: {
    publicKey:
      'BHmT__c1S58czq_uuXVDqEH4tFnXhWv4JOVFzamyNv8gQ0Fo9owdauaYXXHmrvz5buXmm_cbJZ7TPSDUa0kztyg',
    privateKey: 'DZ3PrdhF7V8wp85dcbOTPww6Elkkupr3Dx76Iusqwlo',
  },
  firebase: {
    apiKey: 'AIzaSyB3ZAh0-6OC_JfoTllGTG4EtN6x-PAAWlk',
    authDomain: 'jbuitenhuis-pwa2.firebaseapp.com',
    databaseURL: 'https://jbuitenhuis-pwa2.firebaseio.com',
    projectId: 'jbuitenhuis-pwa2',
    storageBucket: 'jbuitenhuis-pwa2.appspot.com',
    messagingSenderId: '144405186106',
    appId: '1:144405186106:web:c870b9c35ad54c763a9703',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
