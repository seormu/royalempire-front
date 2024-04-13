import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoPendienteComponent } from './deposito-pendiente.component';

describe('DepositoPendienteComponent', () => {
  let component: DepositoPendienteComponent;
  let fixture: ComponentFixture<DepositoPendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositoPendienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositoPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
