import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaWithdrawComponent } from './ba-withdraw.component';

describe('BaWithdrawComponent', () => {
  let component: BaWithdrawComponent;
  let fixture: ComponentFixture<BaWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaWithdrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
