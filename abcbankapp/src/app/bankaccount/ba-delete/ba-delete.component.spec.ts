import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaDeleteComponent } from './ba-delete.component';

describe('BaDeleteComponent', () => {
  let component: BaDeleteComponent;
  let fixture: ComponentFixture<BaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
