import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllusersscreenComponent } from './allusersscreen.component';

describe('AllusersscreenComponent', () => {
  let component: AllusersscreenComponent;
  let fixture: ComponentFixture<AllusersscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllusersscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllusersscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
