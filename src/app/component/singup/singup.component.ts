import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogForCancelButtonComponent } from '../../dialog/dialog-for-cancel-button/dialog-for-cancel-button.component';
import { DialogSubmitButtonComponent } from '../../dialog/dialog-submit-button/dialog-submit-button.component';
import { DialogSubmitServerErrorComponent } from '../../dialog/dialog-submit-server-error/dialog-submit-server-error.component';
import { DialogSubmitValidateComponent } from '../../dialog/dialog-submit-validate/dialog-submit-validate.component';
import { DuplicatedataDialogComponent } from '../../dialog/duplicatedata-dialog/duplicatedata-dialog.component';
import { CustomeValidatoreService } from '../../services/custome-validatore.service';
import { SingUpService } from '../../services/sing-up.service';
import { SingUp } from '../../viewmodel/sing-up';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  cities = ['Rajkot', 'Jamanager', 'Navsari', 'Surat', 'Morbi', 'Valsad', 'Porbander', 'Junagadh']
  formGroup: FormGroup | any = null;
  hide1: boolean = true;
  hide2: boolean = true;
  done: boolean = false;
  canLeave: boolean = true;
  hidden: boolean = true;
  marginBottom: number = 100;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(private customeValidatore: CustomeValidatoreService,
    public dialog: MatDialog, public singupServices: SingUpService,
    private router: Router) {

    this.formGroup = new FormGroup({

      firstName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z. ]*$")]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z. ]*$")]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobileNumber: new FormControl(null, [Validators.required, Validators.pattern("[6-9]{1}[0-9]{9}")]),
      address: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern("[0-9]{6}")]),
      gender: new FormControl(null, [Validators.required]),
      birthdate: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]),
      confirmPassword: new FormControl(null, [Validators.required])

    }, {
      validators: [
        this.customeValidatore.comparePassword("confirmPassword", "password")
      ]
    });

    this.formGroup.valueChanges.subscribe((value: any) => {
      this.canLeave = false;
    });

  }



  onSubmitClick() {
    //Display current form value
    this.formGroup["submitted"] = true;
    if (this.formGroup.valid) {
      this.hidden = false;
      this.marginBottom += 100;
      var signUpViewModel = this.formGroup.value as SingUp;
      this.singupServices.insertProject(signUpViewModel).subscribe(
        (response) => {
          this.canLeave = true;
          this.hidden = true;
          this.afterResponseApi('300ms', '200ms');
          this.router.navigate(["login"]);
        },
        (error) => {
          console.log(error);
          this.hidden = true;
          if (error.status == 409) {
            this.duplicateData("300ms", "200ms");
          }
          else {
            this.formGroup.reset();
            this.afterResponseApi('300ms', '200ms');
          }
        });
    }

  }

  duplicateData(enterAnimationDuration: string, exitAnimationDuration: string) {

    const dialogRef1 = this.dialog.open(DuplicatedataDialogComponent, {

      enterAnimationDuration,
      exitAnimationDuration,

    });
    dialogRef1.afterClosed().subscribe((result) => {

      if (result == false) {
        this.router.navigate(["login"]);
      }
    });
  }

  openDialoge(enterAnimationDuration: string, exitAnimationDuration: string) {

    const dialogRef = this.dialog.open(DialogForCancelButtonComponent, {

      enterAnimationDuration,
      exitAnimationDuration,

    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res == false) {
        this.done = false;
      }
      else {
        this.formGroup.reset();
      }
    });
  }

  submitDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    if (this.formGroup.status == "INVALID") {
      this.dialog.open(DialogSubmitValidateComponent, {
        enterAnimationDuration,
        exitAnimationDuration,
      },
      );
    }

  }

  afterResponseApi(enterAnimationDuration: string, exitAnimationDuration: string) {
    if (this.canLeave == false) {

      this.dialog.open(DialogSubmitServerErrorComponent, {
        enterAnimationDuration,
        exitAnimationDuration,

      });
    }
    else {
      this.dialog.open(DialogSubmitButtonComponent, {
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
  }


  getFormControl(controlName: string): FormControl {
    return this.formGroup.get(controlName) as FormControl;
  }

  //returns the error message based on the given control and error
  getErrorMessage(controlName: string, errorType: string): string {
    //controlName = "customerName"
    //errorType = "required"

    switch (controlName) {
      case "firstName":
        {
          if (errorType === "required") {
            return "You must specify <strong>First Name</strong>";
          }
          else if (errorType === "minLength") {
            return "<strong>Name</strong> can required minimum 2 characters";
          }
          else if (errorType === "pattern") {
            return "<strong>Name</strong> can contain alphabets or dot (.) or space only";
          }
          else
            return "";
        }

      case "lastName":
        {
          if (errorType === "required") {
            return "You must specify <strong>Last Name</strong>";
          }
          else if (errorType === "minLength") {
            return "<strong>Name</strong> can required minimum 2 characters";
          }
          else if (errorType === "pattern") {
            return "<strong>Name</strong> can contain alphabets or dot (.) or space only";
          }
          else
            return "";
        }

      case "email":
        {
          if (errorType === "required")
            return "<strong>Email</strong> can't be blank";
          else if (errorType === "email")
            return "<strong>Email</strong> should be in correct format. Eg: someone@example.com";
          else
            return "";
        }

      case "mobileNumber":
        {
          if (errorType === "required")
            return "<strong>Phone Number</strong> must be enter";
          else if (errorType === "pattern")
            return "<strong>Phone Number</strong> should be in correct format. Eg: 0123456789";
          else
            return "";
        }

      case "address":
        {
          if (errorType === "required")
            return "<strong>Address</strong> must be enter";
          else if (errorType === "minLength")
            return "<strong>Address</strong> must be having ten charecters.";

          else
            return "";
        }

      case "city":
        {
          if (errorType === "required")
            return "You must choose a <strong>City</strong>";
          else
            return "";
        }

      case "gender":
        {
          if (errorType === "required")
            return "You must select a <strong>Gender</strong>";
          else
            return "";
        }

      case "pincode":
        {
          if (errorType === "required")
            return "<strong>Pincode</strong> is required!";
          else if (errorType === "pattern" || errorType === "minLength")
            return "<strong>Pincode</strong> must be having 6 digits only, keep it in mine not having charecters.";
          else
            return "";
        }

      case "birthdate":
        {
          if (errorType === "required")
            return "You must choose a valid <strong>Birthdate</strong>!";
          else
            return "";
        }

      case "password":
        {
          if (errorType === "required")
            return "<strong>Password</strong> is required!";
          else if (errorType === "pattern")
            return "<strong>Password</strong> must be having given strong, please follow given hint!";
          else
            return "";
        }

      case "confirmPassword":
        {
          if (errorType === "required") {

            return "<strong>Confirm Password</strong> is required!";
          }
          if (errorType === "error") {

            return "<strong>Confirm Password</strong> not match!";
          }
          else
            return "";
        }
      default: return "";
    }
  }


}
