import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedpopupComponent } from './confirmedpopup.component';

describe('ConfirmedpopupComponent', () => {
  let component: ConfirmedpopupComponent;
  let fixture: ComponentFixture<ConfirmedpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
