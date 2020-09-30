import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeDaBaitComponent } from './take-da-bait.component';

describe('TakeDaBaitComponent', () => {
  let component: TakeDaBaitComponent;
  let fixture: ComponentFixture<TakeDaBaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeDaBaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeDaBaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
