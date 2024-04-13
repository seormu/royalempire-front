import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoExitosoComponent } from './deposito-exitoso.component';

describe('DepositoExitosoComponent', () => {
  let component: DepositoExitosoComponent;
  let fixture: ComponentFixture<DepositoExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositoExitosoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositoExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
