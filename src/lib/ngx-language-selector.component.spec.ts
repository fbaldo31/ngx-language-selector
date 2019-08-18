import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLanguageSelectorComponent } from './ngx-language-selector.component';

describe('NgxLanguageSelectorComponent', () => {
  let component: NgxLanguageSelectorComponent;
  let fixture: ComponentFixture<NgxLanguageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLanguageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
