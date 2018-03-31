import { Component, NgModule } from '@angular/core';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

var TranslatorComponent = (function () {
    function TranslatorComponent(translate) {
        this.translator = translate;
        this.langs = ["en", "fr", "es"];
    }
    TranslatorComponent.prototype.ngOnInit = function () {
        if (this.langs.indexOf(this.translator.getBrowserLang()) > -1) {
            this.translator.setDefaultLang(this.translator.getBrowserLang());
            this.currentLang = this.translator.getBrowserLang();
        }
        else {
            this.translator.setDefaultLang('en');
            this.currentLang = 'en';
        }
        this.translator.use(this.currentLang);
        document.documentElement.lang = this.currentLang;
    };
    TranslatorComponent.prototype.getBrowserLang = function () {
        return this.translator.getBrowserLang();
    };
    TranslatorComponent.prototype.selectLang = function (event) {
        this.currentLang = event.target.children[0].value;
        this.translator.use(this.currentLang);
        document.documentElement.lang = this.currentLang;
    };
    return TranslatorComponent;
}());
TranslatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'lang',
                template: "\n        <ul id=\"lang-selector\" class=\"dropdown show dropdown-menu\">\n            <li *ngFor=\"let lang of langs\" (click)=\"selectLang($event)\"\n             class=\"lang-{{lang}} dropdown-item\" [ngClass]=\"currentLang === lang ? 'active' : ''\">\n                {{lang}}\n                <input type=\"hidden\" value=\"{{lang}}\">\n            </li>\n        </ul>"
            },] },
];
TranslatorComponent.ctorParameters = function () { return [
    { type: TranslateService, },
]; };
function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
var NgxLanguageSelectorModule = (function () {
    function NgxLanguageSelectorModule() {
    }
    return NgxLanguageSelectorModule;
}());
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
NgxLanguageSelectorModule.ctorParameters = function () { return []; };

export { HttpLoaderFactory, NgxLanguageSelectorModule, TranslatorComponent as ɵa };
//# sourceMappingURL=ngx-language-selector.js.map
