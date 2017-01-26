import {AuthProviders, AuthMethods} from 'angularfire2';

export const appFirebase = {
  apiKey: 'AIzaSyAeOkdHayVvRZg9I1IE7yIjBytfTy3LwzE',
  authDomain: 'angularhackday-puppy-auth.firebaseapp.com',
  databaseURL: 'https://angularhackday-puppy-auth.firebaseio.com',
  storageBucket: 'angularhackday-puppy-auth.appspot.com'
};

export const appFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
