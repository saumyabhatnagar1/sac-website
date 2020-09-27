import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tech4gudComponent } from './tech4gud.component';

describe('Tech4gudComponent', () => {
  let component: Tech4gudComponent;
  let fixture: ComponentFixture<Tech4gudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tech4gudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tech4gudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
