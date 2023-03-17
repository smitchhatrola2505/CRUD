import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: boolean = false;
  email: string = "Unknown";
  emailEdit: boolean = false;
  mobileNumber: string = "Unknow";
  firstName: string = "Unknow";
  constructor(private loginServices: LoginService) {

  }
  editEmail() {
    if (this.data == true) {
      this.emailEdit = !this.emailEdit;
    }
  }
  ngOnInit(): void {
    this.loginServices.responseSubject.subscribe(response => {
      if (response != "") {
        this.data = true;
      }
      this.email = response.body.email;
      this.mobileNumber = response.body.mobileNumber;
      this.firstName = response.body.firstName;
    })
  }
}


