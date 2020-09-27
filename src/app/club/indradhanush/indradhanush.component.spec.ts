import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndradhanushComponent } from './indradhanush.component';

describe('IndradhanushComponent', () => {
  let component: IndradhanushComponent;
  let fixture: ComponentFixture<IndradhanushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndradhanushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndradhanushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
