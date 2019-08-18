import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { WebpackTranslateLoader } from './webpack-translate-loader';
import { NgxLanguageSelectorComponent } from './ngx-language-selector.component';

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
        useClass: WebpackTranslateLoader
      },
      isolate: true
    }),
  ],
  declarations: [NgxLanguageSelectorComponent],
  exports: [
    TranslateModule,
    NgxLanguageSelectorComponent,
  ],
})
export class NgxLanguageSelectorModule { }
