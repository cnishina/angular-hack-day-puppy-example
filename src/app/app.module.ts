import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';
import { appFirebase } from './app.firebase';
import { PuppyComponent} from './puppy';

@NgModule({
  declarations: [
    AppComponent,
    PuppyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(appFirebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
