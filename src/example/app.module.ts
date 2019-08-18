import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxLanguageSelectorModule } from '../../projects/ngx-language-selector/src/public-api';

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
