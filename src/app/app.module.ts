import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { AppComponent } from './app.component';
import {
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [AdalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
