import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunComponent } from './mun.component';

describe('MunComponent', () => {
let component: MunComponent;
  let fixture: ComponentFixture<MunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
