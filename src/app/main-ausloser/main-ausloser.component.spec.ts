import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAusloserComponent } from './main-ausloser.component';

describe('MainAusloserComponent', () => {
  let component: MainAusloserComponent;
  let fixture: ComponentFixture<MainAusloserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAusloserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAusloserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
