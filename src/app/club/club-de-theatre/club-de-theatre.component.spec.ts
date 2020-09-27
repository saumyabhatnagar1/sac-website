import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDeTheatreComponent } from './club-de-theatre.component';

describe('ClubDeTheatreComponent', () => {
  let component: ClubDeTheatreComponent;
  let fixture: ComponentFixture<ClubDeTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubDeTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDeTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
