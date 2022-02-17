import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisioconferenceComponent } from './visioconference.component';

describe('VisioconferenceComponent', () => {
  let component: VisioconferenceComponent;
  let fixture: ComponentFixture<VisioconferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisioconferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisioconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
