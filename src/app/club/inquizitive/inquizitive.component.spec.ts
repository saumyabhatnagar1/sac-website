import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquizitiveComponent } from './inquizitive.component';

describe('InquizitiveComponent', () => {
  let component: InquizitiveComponent;
  let fixture: ComponentFixture<InquizitiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquizitiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquizitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
