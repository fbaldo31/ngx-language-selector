# ngx-language-selector

An Angular 4+ component integrating ngx-translate.
First the browser language is detected and applied if the traduction file exists in `/src/assets/i18n/{lang}.json` otherwise english is set as default.

## Installation

`npm i @ngx-translate/core @ngx-translate/http-loader ngx-language-selector --save`

app.module :
`import { NgxLanguageSelectorModule }     from 'ngx-language-selector.module';`

``` js
    imports: [
        BrowserModule,
        ...
        NgxLanguageSelectorModule
    ],
```

## Usage

Then use the following tags to get a dropdown to toggle easily from a language to another.
It use the dropdown boostrap css class so if you have bootstrap in your project, it will be styled.
You have to trigger open / close dropdown by yourself.

`<lang></lang>`

To have more information on events or other features of TranslateService please read the
[ngx-translate documentation](http://www.ngx-translate.com/)

### Todo

Add a parameter for the default language if the broswer's lang is not recognized.