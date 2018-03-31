(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngx-translate/core'), require('@angular/common'), require('@angular/common/http'), require('@ngx-translate/http-loader')) :
	typeof define === 'function' && define.amd ? define('ngx-language-selector', ['exports', '@angular/core', '@ngx-translate/core', '@angular/common', '@angular/common/http', '@ngx-translate/http-loader'], factory) :
	(factory((global['ngx-language-selector'] = {}),global.ng.core,global['ngx-translate-core'],global.ng.common,global.ng.common.http,global['ngx-translate-http-loader']));
}(this, (function (exports,core,core$1,common,http,httpLoader) { 'use strict';

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
    { type: core.Component, args: [{
                selector: 'lang',
                template: "\n        <ul id=\"lang-selector\" class=\"dropdown show dropdown-menu\">\n            <li *ngFor=\"let lang of langs\" (click)=\"selectLang($event)\"\n             class=\"lang-{{lang}} dropdown-item\" [ngClass]=\"currentLang === lang ? 'active' : ''\">\n                {{lang}}\n                <input type=\"hidden\" value=\"{{lang}}\">\n            </li>\n        </ul>"
            },] },
];
TranslatorComponent.ctorParameters = function () { return [
    { type: core$1.TranslateService, },
]; };
function HttpLoaderFactory(http$$1) {
    return new httpLoader.TranslateHttpLoader(http$$1);
}
var NgxLanguageSelectorModule = (function () {
    function NgxLanguageSelectorModule() {
    }
    return NgxLanguageSelectorModule;
}());
NgxLanguageSelectorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    http.HttpClientModule,
                    core$1.TranslateModule.forRoot({
                        loader: {
                            provide: core$1.TranslateLoader,
                            useFactory: HttpLoaderFactory,
                            deps: [http.HttpClient]
                        },
                        isolate: true
                    }),
                ],
                declarations: [TranslatorComponent],
                exports: [
                    core$1.TranslateModule,
                    TranslatorComponent
                ]
            },] },
];
NgxLanguageSelectorModule.ctorParameters = function () { return []; };

exports.HttpLoaderFactory = HttpLoaderFactory;
exports.NgxLanguageSelectorModule = NgxLanguageSelectorModule;
exports.ɵa = TranslatorComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-language-selector.umd.js.map
