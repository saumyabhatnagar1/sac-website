import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnovateComponent } from './technovate.component';

describe('TechnovateComponent', () => {
  let component: TechnovateComponent;
  let fixture: ComponentFixture<TechnovateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnovateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnovateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
