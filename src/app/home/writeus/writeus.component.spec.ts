import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteusComponent } from './writeus.component';

describe('WriteusComponent', () => {
  let component: WriteusComponent;
  let fixture: ComponentFixture<WriteusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
