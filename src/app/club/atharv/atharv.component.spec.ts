import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtharvComponent } from './atharv.component';

describe('AtharvComponent', () => {
  let component: AtharvComponent;
  let fixture: ComponentFixture<AtharvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtharvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtharvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
