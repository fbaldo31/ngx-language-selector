# ngx-language-selector

An Angular 4+ component integrating ngx-translate.
First the browser language is detected and applied if the traduction file exists in `/src/assets/i18n/{lang}.json` otherwise english is set as default.

[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/fbaldo31/ngx-language-selector%2Fngx-language-selector?key=eyJhbGciOiJIUzI1NiJ9.NWM2MTFjNmMxMmE5NTYyZTZhYWQ3YTRl.S6H0kL3RuTkulI3shIONacgTBojrmumEo9peBrC4buw&type=cf-1)]( https%3A%2F%2Fg.codefresh.io%2Fpipelines%2Fngx-language-selector%2Fbuilds%3Ffilter%3Dtrigger%3Abuild~Build%3Bpipeline%3A5e5430b1a284e042ae2eaabf~ngx-language-selector)  ![David](https://img.shields.io/david/fbaldo31/ngx-language-selector.svg)

[Demo](https://fbaldo31.github.io/ngx-language-selector/)

## Install

`yarn add ngx-language-selector @ngx-translate/core @ngx-translate/http-loader`

## Setup

1. Create some files at `/src/assets/i18n/{lang}.json`

2. Import the module:

    app.module :

    `import { NgxLanguageSelectorModule }     from 'ngx-language-selector.module';`

    ```ts
        imports: [
            BrowserModule,
            ...
            NgxLanguageSelectorModule
        ],
    ```
  
3. You may need to add the following to your tsconfig.json

```json
"moduleResolution": "node",
"resolveJsonModule": true,
```

## Usage

### Using Bootstrap (default)

`<ngx-lang translations="en,fr"></ngx-lang>`

You will get a dropdown to toggle easily from a language to another. (requires bootsrap)

### Using simple html

If you are looking for a zero dependencies solution and want more control you can use the template attribute:

`<ngx-lang translations="en,fr" template="html" ulClass="visible" liClass="custom-display"></ngx-lang>`

You will get an `<ul></ul>` element with nested `<li></li>` elements which will have a `lang-{{lang}}` class + any class provided as input.

## Custom Implementation

If you want to build your own component (i.e. using an extrnal library) you can just use the regular `TranslateService` `getLangs()` method to change the selected language yourself after registering the module.

In this case you should call the component with `disabled` input set to true:

`<ngx-lang translations="en,fr" [disabled]="true"></ngx-lang>`

## Example

app.module

```ts
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
```

app.component.html

```ts
Select your favorite language: <ngx-lang translations="en,fr"></ngx-lang>
{{'hello' | translate}} {{'world' | translate}} !
```

## Api

Attributes|Type|Default value|Description
----------|----|-------------|-----------
translations|string|en|Coma separated string to list available translation files|
template|string|bootstrap|The default value for retrocompatibility|
ulClass|string| - |Not used in Bootstrap template|
liClass|string| - |Not used in Bootstrap template|
disabled|boolean|false|Use to hide the component - Custom implementation only|

----------------------------------------

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Code scaffolding

Run `ng generate component component-name --project ngx-language-selector` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-language-selector`.
> Note: Don't forget to add `--project ngx-language-selector` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build ngx-language-selector` to build the project. The build artifacts will be stored in the `docs/` directory.

## Publishing

After building your library with `ng build ngx-language-selector`, go to the docs folder `cd docs/ngx-language-selector` and run `npm publish`.

## Running unit tests

Run `ng test ngx-language-selector` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
