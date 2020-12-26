import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayCardComponent } from './stay-card.component';

describe('StayCardComponent', () => {
  let component: StayCardComponent;
  let fixture: ComponentFixture<StayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
