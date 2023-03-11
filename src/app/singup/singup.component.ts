import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit{

  cities = ['Rajkot', 'Jamanager', 'Navsari', 'Surat', 'Morbi', 'Valsad', 'Porbander', 'Junagadh']

  formGroup: FormGroup;


  constructor() {
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

    });
  }

  ngOnInit(): void {

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

      default: return "";
    }
  }


}
