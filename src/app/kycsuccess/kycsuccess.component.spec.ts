import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycsuccessComponent } from './kycsuccess.component';

describe('KycsuccessComponent', () => {
  let component: KycsuccessComponent;
  let fixture: ComponentFixture<KycsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
