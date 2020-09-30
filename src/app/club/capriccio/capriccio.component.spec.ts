import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapriccioComponent } from './capriccio.component';

describe('CapriccioComponent', () => {
  let component: CapriccioComponent;
  let fixture: ComponentFixture<CapriccioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapriccioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapriccioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
