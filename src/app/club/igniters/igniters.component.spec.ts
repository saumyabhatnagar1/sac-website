import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnitersComponent } from './igniters.component';

describe('IgnitersComponent', () => {
  let component: IgnitersComponent;
  let fixture: ComponentFixture<IgnitersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgnitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
