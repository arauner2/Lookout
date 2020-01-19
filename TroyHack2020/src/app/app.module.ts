import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { IncidentListComponent } from './components/incident-list/incident-list.component';
import { IncidentFormComponent } from './components/incident-form/incident-form.component';

const firebaseConfig = {
  apiKey: "AIzaSyA54EFJXhzRQgc5e0P-d6Ug44E3sG5gnPs",
  authDomain: "troyhack2020.firebaseapp.com",
  databaseURL: "https://troyhack2020.firebaseio.com",
  projectId: "troyhack2020",
  storageBucket: "troyhack2020.appspot.com",
  messagingSenderId: "1013200224123",
  appId: "1:1013200224123:web:1793bbd0627aba20de07de"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncidentListComponent,
    IncidentFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
