import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackasolComponent } from './hackasol.component';

describe('HackasolComponent', () => {
  let component: HackasolComponent;
  let fixture: ComponentFixture<HackasolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackasolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackasolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
