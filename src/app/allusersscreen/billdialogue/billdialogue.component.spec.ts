import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilldialogueComponent } from './billdialogue.component';

describe('BilldialogueComponent', () => {
  let component: BilldialogueComponent;
  let fixture: ComponentFixture<BilldialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilldialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilldialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
