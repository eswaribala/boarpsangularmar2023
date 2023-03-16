import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaDeleteComponent } from './sa-delete.component';

describe('SaDeleteComponent', () => {
  let component: SaDeleteComponent;
  let fixture: ComponentFixture<SaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
