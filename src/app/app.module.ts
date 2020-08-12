


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,rountingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
// Firebase
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { UsersComponent } from './users/users.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    rountingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
