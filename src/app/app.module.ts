import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxLanguageSelectorModule } from 'ngx-language-selector';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxLanguageSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
