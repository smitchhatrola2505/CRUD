import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogAlertComponent } from './login-dialog-alert.component';

describe('LoginDialogAlertComponent', () => {
  let component: LoginDialogAlertComponent;
  let fixture: ComponentFixture<LoginDialogAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDialogAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDialogAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
