import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaCreateComponent } from './ba-create.component';

describe('BaCreateComponent', () => {
  let component: BaCreateComponent;
  let fixture: ComponentFixture<BaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
