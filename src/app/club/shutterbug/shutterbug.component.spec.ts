import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutterbugComponent } from './shutterbug.component';

describe('ShutterbugComponent', () => {
  let component: ShutterbugComponent;
  let fixture: ComponentFixture<ShutterbugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShutterbugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShutterbugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
