// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDZSXVhoNcpsIZXgQZYFvMfzBu3ya-mXXE',
    authDomain: 's2s-service-bc72d.firebaseapp.com',
    databaseURL: 'https://s2s-service-bc72d.firebaseio.com',
    projectId: 's2s-service-bc72d',
    storageBucket: 's2s-service-bc72d.appspot.com',
    messagingSenderId: '140432915458'
  },
  apiService: {
  },
  provision: {
    pageCount: 10
  }
};
