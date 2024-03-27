import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTraderComponent } from './web-trader.component';

describe('WebTraderComponent', () => {
  let component: WebTraderComponent;
  let fixture: ComponentFixture<WebTraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebTraderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
