import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfuLandingPageComponent } from './ifu-landing-page.component';

describe('IfuLandingPageComponent', () => {
  let component: IfuLandingPageComponent;
  let fixture: ComponentFixture<IfuLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfuLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfuLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
