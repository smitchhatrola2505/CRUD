import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  userName: string = "";
  firstNameUser:string="";
  defaultName :string = "Unknow";
  arrowDown = false;
  constructor(private loginService: LoginService) {

  }
  ngOnInit() {

      this.loginService.isLoggedIn.subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      })

      this.loginService.responseSubject.subscribe(response => {
        this.userName = response.body.firstName + " "+ response.body.lastName;
        this.firstNameUser = response.body.firstName;
      })

  }
  toggleArrow() {
    this.arrowDown = !this.arrowDown;
  }

  logout() {
    this.isLoggedIn = false;
    this.userName = this.defaultName;
    this.firstNameUser = this.defaultName;
  }


}
