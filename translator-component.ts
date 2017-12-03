import {Component}        from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { EventEmitter }   from '@angular/core/src/event_emitter';
import { EventListener }  from '@angular/core/src/debug/debug_node';

@Component({
    selector: 'lang',
    template: `
        <div id="lang-selector" class="form-group">
            <select class="form-control" (change)="selectLang($event)">
                <option *ngFor="let lang of langs" value="{{lang}}" class="lang-{{lang}}">{{lang}}
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
        // Set the browser language as default
        if (translate.getBrowserLang()) {
            translate.setDefaultLang(translate.getBrowserLang())
            this.currentLang = translate.getBrowserLang();
        } else {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang('en');
            this.currentLang = 'en';
        }        

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }

    public selectLang(event) {
        this.currentLang = event.target.value;
        this.translator.use(this.currentLang);
        console.log(event, this.currentLang);
    }
}