import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubmitButtonComponent } from './dialog-submit-button.component';

describe('DialogSubmitButtonComponent', () => {
  let component: DialogSubmitButtonComponent;
  let fixture: ComponentFixture<DialogSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSubmitButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
