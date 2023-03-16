import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTransferComponent } from './ba-transfer.component';

describe('BaTransferComponent', () => {
  let component: BaTransferComponent;
  let fixture: ComponentFixture<BaTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
