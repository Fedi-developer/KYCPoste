import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCFormComponent } from './kyc-form.component';

describe('KYCFormComponent', () => {
  let component: KYCFormComponent;
  let fixture: ComponentFixture<KYCFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KYCFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
