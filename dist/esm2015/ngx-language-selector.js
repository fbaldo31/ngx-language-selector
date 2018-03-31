import { Component, NgModule } from '@angular/core';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TranslatorComponent {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translator = translate;
        this.langs = ["en", "fr", "es"];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Set the browser language as default if the lang file exists, otherwise English is set as default
        if (this.langs.indexOf(this.translator.getBrowserLang()) > -1) {
            this.translator.setDefaultLang(this.translator.getBrowserLang());
            this.currentLang = this.translator.getBrowserLang();
        }
        else {
            // this language will be used as a fallback when a translation isn't found in the current language
            this.translator.setDefaultLang('en');
            this.currentLang = 'en';
        }
        this.translator.use(this.currentLang);
        document.documentElement.lang = this.currentLang;
    }
    /**
     * @return {?}
     */
    getBrowserLang() {
        return this.translator.getBrowserLang();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectLang(event) {
        this.currentLang = event.target.children[0].value;
        this.translator.use(this.currentLang);
        document.documentElement.lang = this.currentLang;
    }
}
TranslatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'lang',
                template: `
        <ul id="lang-selector" class="dropdown show dropdown-menu">
            <li *ngFor="let lang of langs" (click)="selectLang($event)"
             class="lang-{{lang}} dropdown-item" [ngClass]="currentLang === lang ? 'active' : ''">
                {{lang}}
                <input type="hidden" value="{{lang}}">
            </li>
        </ul>`
            },] },
];
/** @nocollapse */
TranslatorComponent.ctorParameters = () => [
    { type: TranslateService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} http
 * @return {?}
 */
function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
class NgxLanguageSelectorModule {
}
NgxLanguageSelectorModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
/** @nocollapse */
NgxLanguageSelectorModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { HttpLoaderFactory, NgxLanguageSelectorModule, TranslatorComponent as ɵa };
//# sourceMappingURL=ngx-language-selector.js.map
