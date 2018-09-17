// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  adalConfig: {
    tenant: 'aniketrai2mindtree.onmicrosoft.com',
    clientId: '2cc19000-7eec-4db6-8ba6-5e857b813cb2',
    // redirectUri: window.location.origin + '/',
    // tenant: 'shekarmindtree.onmicrosoft.com',
    // clientId: 'da034923-466e-41c8-baa1-89249b95a984',
    postLogoutRedirectUri: 'http://localhost:4200',
    cacheLocation: 'localStorage'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
