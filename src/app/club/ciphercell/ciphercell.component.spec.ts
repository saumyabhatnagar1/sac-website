import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiphercellComponent } from './ciphercell.component';

describe('CiphercellComponent', () => {
  let component: CiphercellComponent;
  let fixture: ComponentFixture<CiphercellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiphercellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiphercellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
