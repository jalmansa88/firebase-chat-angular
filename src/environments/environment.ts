// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBspaRAm-b7u1vurCQ1QNb-WV6y19UgJdA',
    authDomain: 'firechat-121c3.firebaseapp.com',
    databaseURL: 'https://firechat-121c3.firebaseio.com',
    projectId: 'firechat-121c3',
    storageBucket: 'firechat-121c3.appspot.com',
    messagingSenderId: '799415107423'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
