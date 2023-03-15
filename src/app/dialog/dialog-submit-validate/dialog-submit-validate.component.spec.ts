import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubmitValidateComponent } from './dialog-submit-validate.component';

describe('DialogSubmitValidateComponent', () => {
  let component: DialogSubmitValidateComponent;
  let fixture: ComponentFixture<DialogSubmitValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSubmitValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSubmitValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
