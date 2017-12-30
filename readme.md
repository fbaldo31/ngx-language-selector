# ngx-language-selector

An Angular 4+ component integrating ngx-translate. First the browser language is detected and applied.

## Installation

`npm i ngx-language-selector --save`

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

Then use the following tags to get a `<select>` to toggle easily from a language to another.

`<lang></lang>`