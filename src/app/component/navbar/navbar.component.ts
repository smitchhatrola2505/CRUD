import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  arrowDown = false;
  constructor(private loginService: LoginService) {

  }
  ngOnInit() {

    this.loginService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
  }
  toggleArrow() {
    this.arrowDown = !this.arrowDown;
  }

  logout()
  {
    this.isLoggedIn=false;
  }


}
