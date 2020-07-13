import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialcardsComponent } from './socialcards/socialcards.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { EventdialogComponent } from './eventdialog/eventdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialcardsComponent,
    EventdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [
    EventdialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
