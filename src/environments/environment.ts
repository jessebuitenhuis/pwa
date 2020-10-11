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
    apiKey: 'AIzaSyAgEB1GQ113WiI70R1hsCFAf3vssYrc7-M',
    authDomain: 'jbuitenhuis-pwa.firebaseapp.com',
    databaseURL: 'https://jbuitenhuis-pwa.firebaseio.com',
    projectId: 'jbuitenhuis-pwa',
    storageBucket: 'jbuitenhuis-pwa.appspot.com',
    messagingSenderId: '930620937238',
    appId: '1:930620937238:web:9c3faf53652f5611115137',
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
