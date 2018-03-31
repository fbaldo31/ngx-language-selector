import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export declare class TranslatorComponent implements OnInit {
    langs: any;
    currentLang: any;
    isOpen: boolean;
    private translator;
    private meta;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    private getBrowserLang();
    selectLang(event: any): void;
}
