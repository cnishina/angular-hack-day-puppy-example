import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { appFirebase, appFirebaseAuthConfig } from './app.firebase';
import { LoginComponent, PuppyComponent } from './puppy';
import { AuthService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PuppyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(appFirebase, appFirebaseAuthConfig),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
