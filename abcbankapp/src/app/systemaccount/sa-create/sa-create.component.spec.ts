import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaCreateComponent } from './sa-create.component';

describe('SaCreateComponent', () => {
  let component: SaCreateComponent;
  let fixture: ComponentFixture<SaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
