import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaDirectdebitComponent } from './ba-directdebit.component';

describe('BaDirectdebitComponent', () => {
  let component: BaDirectdebitComponent;
  let fixture: ComponentFixture<BaDirectdebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaDirectdebitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaDirectdebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
