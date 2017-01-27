import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthMethods, AuthProviders} from 'angularfire2';
import {AuthService, Profile} from '../shared';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  profile: Profile;

  constructor(public af: AngularFire, public as: AuthService) {}

  ngOnInit() {
    this.as.authSubscription(profile => {
      this.profile = profile;
    });
  }

  login() {
    this.as.login();
  }

  logout() {
    this.as.logout();
  }
}
