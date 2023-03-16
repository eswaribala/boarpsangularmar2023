import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaDepositComponent } from './ba-deposit.component';

describe('BaDepositComponent', () => {
  let component: BaDepositComponent;
  let fixture: ComponentFixture<BaDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaDepositComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
