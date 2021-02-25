import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAlarmsComponent } from './stock-alarms.component';

describe('StockAlarmsComponent', () => {
  let component: StockAlarmsComponent;
  let fixture: ComponentFixture<StockAlarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAlarmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
