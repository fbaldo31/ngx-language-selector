import { Component, OnInit }      from '@angular/core';
import { TranslateService }       from '@ngx-translate/core';

@Component({
    selector: 'lang',
    template: `
        <ul id="lang-selector" class="dropdown show dropdown-menu">
            <li *ngFor="let lang of langs" (click)="selectLang($event)"
             class="lang-{{lang}} dropdown-item" [ngClass]="currentLang === lang ? 'active' : ''">
                {{lang}}
                <input type="hidden" value="{{lang}}">
            </li>
        </ul>`
})
export class TranslatorComponent implements OnInit{

    public langs;
    public currentLang;
    public isOpen: boolean;
    private translator;
    private meta;

    constructor(translate: TranslateService) {
        this.translator = translate;
        this.langs = [];
    }

    ngOnInit() {
        // Set the browser language as default if the lang file exists, otherwise English is set as default
        if (this.langs.indexOf(this.translator.getBrowserLang()) > -1) {
            this.translator.setDefaultLang(this.translator.getBrowserLang())
            this.currentLang = this.translator.getBrowserLang();
        } else {
            // this language will be used as a fallback when a translation isn't found in the current language
            this.translator.setDefaultLang('en');
            this.currentLang = 'en';            
        }
        this.translator.use(this.currentLang);
        document.documentElement.lang = this.currentLang;
    }

    private getBrowserLang() {
      return this.translator.getBrowserLang();  
    }

    public selectLang(event) {
        this.currentLang = event.target.children[0].value;
        this.translator.use(this.currentLang);
        document.documentElement.lang = this.currentLang;
    }
}