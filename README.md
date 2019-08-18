# NgxLanguageSelector

An Angular 4+ component integrating ngx-translate.
First the browser language is detected and applied if the traduction file exists in `/src/assets/i18n/{lang}.json` otherwise english is set as default.

## Install

`yarn add @ngx-translate/core @ngx-translate/http-loader ngx-language-selector`

app.module :

`import { NgxLanguageSelectorModule }     from 'ngx-language-selector.module';`

```ts
    imports: [
        BrowserModule,
        ...
        NgxLanguageSelectorModule
    ],
```

## Usage

`<lib-ngx-lang translations="en,fr"></lib-ngx-lang>`

You will get a dropdown to toggle easily from a language to another. (require bootsrap)

You may need to add the following to your tsconfig.json

```json
"moduleResolution": "node",
"resolveJsonModule": true,
```

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

## Todo

- Manage pluralization

## Setup

You may add t
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Code scaffolding

Run `ng generate component component-name --project ngx-language-selector` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-language-selector`.
> Note: Don't forget to add `--project ngx-language-selector` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-language-selector` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-language-selector`, go to the dist folder `cd dist/ngx-language-selector` and run `npm publish`.

## Running unit tests

Run `ng test ngx-language-selector` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
