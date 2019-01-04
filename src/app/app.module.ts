import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MNLibModule } from 'projects/mn-lib/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MNLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
