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


  // TODO: login with either angular fire or auth service
  login() {
  }

  // TODO: logout with either angular fire or auth service
  logout() {
  }
}
