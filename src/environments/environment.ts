// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  gateway: 'http://localhost:3000/query',
  callback: 'http://localhost:4200/callback',
  domain: 'test.auth0.com',
  clientId: '<YOUR_AUTH0_APPLICATION_CLIENT_ID>',
  audience: '<YOUR_AUTH0_API_IDENTIFIER>'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
