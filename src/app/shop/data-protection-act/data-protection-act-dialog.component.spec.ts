import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProtectionActDialogComponent } from './data-protection-act-dialog.component';

describe('DataProtectionActDialogComponent', () => {
  let component: DataProtectionActDialogComponent;
  let fixture: ComponentFixture<DataProtectionActDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProtectionActDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProtectionActDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
