<<<<<<< HEAD
import { Component, OnInit }      from '@angular/core';
import { TranslateService }       from '@ngx-translate/core';
=======
import {Component}        from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
>>>>>>> 7e1d57c9f625f7a09d311aaa509ec8b5b34fcb3d

@Component({
    selector: 'lang',
    template: `
<<<<<<< HEAD
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
=======
        <div id="lang-selector" class="form-group">
            <select class="form-control" (change)="selectLang($event)">
                <option *ngFor="let lang of langs" value="{{lang}}" class="lang-{{lang}}" selected="{{currentLang === lang ? 'selected' : ''}}">{{lang}}</option>
            </select>
        </div>
    `
})
export class TranslatorComponent {
    public langs;
    public currentLang;
    private translator;

    constructor(translate: TranslateService) {
        this.translator = translate;
        this.langs = translate.getLangs();
        this.currentLang = this.translator.getBrowserLang();
        translate.setDefaultLang('en');           
        translate.use('en');
        
        // Set the browser language as default
        if (this.currentLang) {            
            
            try {
                translate.setDefaultLang(this.currentLang); 
                translate.use(this.currentLang); 
            } catch(e) {
                console.error(e);
            }       
            
        } else {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang('en');
            this.currentLang = 'en';             
            translate.use('en');
        }        
    }

    /**
     * @desc Triggered when the select's value changes
     * @param event 
     */
    public selectLang(event): void {
        this.currentLang = event.target.value;
        this.translator.use(this.currentLang);
>>>>>>> 7e1d57c9f625f7a09d311aaa509ec8b5b34fcb3d
    }
}