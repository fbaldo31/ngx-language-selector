import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ngx-lang',
    template: `
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" (click)="openCose()" type="button" aria-haspopup="true" aria-expanded="false">
      {{currentLang}}
    </button>
      <ul id="lang-selector" class="dropdown-menu" [ngClass]="isOpen ? 'show' : ''">
        <li *ngFor="let lang of langs" (click)="selectLang($event)"
            class="lang-{{lang}} dropdown-item" [ngClass]="currentLang === lang ? 'active' : ''">
            {{lang}}
            <input type="hidden" value="{{lang}}">
        </li>
      </ul>
    </div>
    `
})
export class NgxLanguageSelectorComponent implements OnInit {

    // @Input() style: 'bootstrap'|'html' = 'bootstrap';
    @Input() translations = 'en';
    @Input() defaultLang = 'en';
    public langs: string[] = [];
    public currentLang: string;
    public isOpen = false;

    constructor(private translator: TranslateService) { }

    ngOnInit() {
      this.langs = this.translations.split(',');
      this.translator.addLangs(this.langs);
      this.currentLang = this.setDefaultLang();
      this.translator.use(this.currentLang);
    }

    /**
     * @desc Set the browser language as default if the lang file exists, otherwise the @Input default is set as default
     */
    private setDefaultLang(): string {
      let currentLang: string;
      const browserLang = this.translator.getBrowserLang();
      // console.log('Browser lang', browserLang);
      if (this.langs.indexOf(browserLang) > -1) {
          this.translator.setDefaultLang(browserLang);
          currentLang = browserLang;
          console.log('Current lang is derived from browser lang', currentLang);
      } else {
          // this language will be used as a fallback when a translation isn't found in the current language
          this.translator.setDefaultLang(this.defaultLang);
          currentLang = this.defaultLang;
          console.log('Default lang is used instead', currentLang);
      }
      return currentLang;
    }

    /**
     * @desc Change the language to use
     */
    public selectLang(event) {
      this.currentLang = event.target.children[0].value;
      this.translator.use(this.currentLang).subscribe(res => {
        this.isOpen = false;
      }, err => console.error('Unable to use translations for ' + this.currentLang + ' ' + err.message));
    }

    public openCose() {
      this.isOpen = !this.isOpen;
    }
}
