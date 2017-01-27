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
        let profile = new Profile();
        profile.name = user.auth.displayName;
        profile.imageUrl = user.auth.photoURL;
        callback(profile);
      } else {
        callback(null);
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
