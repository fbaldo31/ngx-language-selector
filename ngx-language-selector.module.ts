<<<<<<< HEAD
import { NgModule }                       from '@angular/core';
import { CommonModule }                   from '@angular/common';
import { BrowserModule}                   from '@angular/platform-browser';
import { HttpClientModule, HttpClient}    from '@angular/common/http';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader}              from '@ngx-translate/http-loader';

import { TranslatorComponent}             from './translator-component';
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {TranslatorComponent} from './translator-component';
>>>>>>> 7e1d57c9f625f7a09d311aaa509ec8b5b34fcb3d

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
  }),
  
  ],
  declarations: [TranslatorComponent],
  exports: [
    TranslateModule,
    TranslatorComponent
  ]
})
export class NgxLanguageSelectorModule { }
