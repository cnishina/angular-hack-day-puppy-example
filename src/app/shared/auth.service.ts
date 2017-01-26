import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Profile } from './profile.model';

@Injectable()
export class AuthService {
  constructor(public af: AngularFire) {
  }

  authSubscription(callback: (profile: Profile) => void) {
    this.af.auth.subscribe(user => {
      if (user) {
        // TODO(you): create a profile, add user info to the profile object
        //   user.auth.displayName
        //   user.auth.photoURL
        // run callback
      } else {
        // TODO(you): run callback to reset the profile
      }
    });
  }

  login() {
    this.af.auth.login();
    console.log('login');
  }

  logout() {
    this.af.auth.logout();
    console.log('logout');
  }
}
