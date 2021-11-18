import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenbuttonsComponent } from './screenbuttons.component';

describe('ScreenbuttonsComponent', () => {
  let component: ScreenbuttonsComponent;
  let fixture: ComponentFixture<ScreenbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
