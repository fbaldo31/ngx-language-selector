import { Component }        from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'lang',
    template: `
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
    }
}