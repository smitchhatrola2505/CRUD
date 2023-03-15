import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForCancelButtonComponent } from './dialog-for-cancel-button.component';

describe('DialogForCancelButtonComponent', () => {
  let component: DialogForCancelButtonComponent;
  let fixture: ComponentFixture<DialogForCancelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForCancelButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogForCancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
