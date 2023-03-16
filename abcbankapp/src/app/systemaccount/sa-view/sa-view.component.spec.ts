import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaViewComponent } from './sa-view.component';

describe('SaViewComponent', () => {
  let component: SaViewComponent;
  let fixture: ComponentFixture<SaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
