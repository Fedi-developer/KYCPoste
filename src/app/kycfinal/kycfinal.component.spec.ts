import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCfinalComponent } from './kycfinal.component';

describe('KYCfinalComponent', () => {
  let component: KYCfinalComponent;
  let fixture: ComponentFixture<KYCfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KYCfinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
