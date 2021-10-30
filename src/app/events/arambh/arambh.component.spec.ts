import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArambhComponent } from './arambh.component';

describe('ArambhComponent', () => {
  let component: ArambhComponent;
  let fixture: ComponentFixture<ArambhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArambhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArambhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
