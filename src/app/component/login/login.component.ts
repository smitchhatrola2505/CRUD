import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginViewModel } from '../../viewmodel/login-view-model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoginDialogAlertComponent } from '../../dialog/login-dialog-alert/login-dialog-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogSubmitServerErrorComponent } from '../../dialog/dialog-submit-server-error/dialog-submit-server-error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup: FormGroup | any;
  hide1: boolean = true;

  hidden:boolean = true;

  constructor(private loginService:LoginService,private router: Router,
    public dialog: MatDialog ) {

    this.formGroup = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required])
      }
    );
  }

  onLoginClick()
  {
    this.hidden=false;

    if(this.formGroup.invalid)
    {
      this.hidden=true;
    }
    
    setTimeout(()=>{
    this.formGroup["submitted"] = true;
    if (this.formGroup.valid) {
      var loginViewModel = this.formGroup.value as LoginViewModel;

      this.loginService.login(loginViewModel).subscribe(
        (response) => {
          
          this.hidden=true;
          this.router.navigate(["data"]);
        },
        (error) => {
          this.hidden=true;
          if(error.status == 401){
              this.unAuthorised("300ms","200ms");
          }
          else if(error.status == 0)
          {
            this.afterResponseApi("300ms","200ms");
          }
          console.log(error);
        });   
    }

  },1500);
  }

afterResponseApi(enterAnimationDuration: string, exitAnimationDuration: string) {
   
      this.dialog.open(DialogSubmitServerErrorComponent, {
        enterAnimationDuration,
        exitAnimationDuration,

      });
  
      // this.dialog.open(DialogSubmitButtonComponent, {
      //   enterAnimationDuration,
      //   exitAnimationDuration,
      // });
    
  }
  
  unAuthorised(enterAnimationDuration: string, exitAnimationDuration: string)
  {
    this.dialog.open(LoginDialogAlertComponent, {
      enterAnimationDuration,
      exitAnimationDuration,

    });
  }


  getFormControl(controlName: string): FormControl {
    return this.formGroup.get(controlName) as FormControl;
  }

  //returns the error message based on the given control and error
  getErrorMessage(controlName: string, errorType: string): string {
    //controlName = "customerName"
    //errorType = "required"

    switch (controlName) {
     
      case "email":
        {
          if (errorType === "required")
            return "<strong>Email</strong> can't be blank";
          else if (errorType === "email")
            return "<strong>Email</strong> should be in correct format. Eg: someone@example.com";
          else
            return "";
        }

      case "password":
        {
          if (errorType === "required")
            return "<strong>Password</strong> is required!";
          
          else
            return "";
        }

      
      default: return "";
    }
  }


}
