import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from '../viewmodel/login-view-model';
import { map, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { SingUp } from '../viewmodel/sing-up';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = new BehaviorSubject<boolean>(false);
  responseSubject = new BehaviorSubject<any>("");

  constructor(private httpClient: HttpClient) { }

  public login(loginViewModel: LoginViewModel): Observable<any> {
    // debugger;
   
    return this.httpClient.post<any>("http://localhost:5249/api/login", loginViewModel, { responseType: "json", observe: "response" })
      .pipe(map(response => {
        if (response) {
          console.log(response);
          this.isLoggedIn.next(true);
          this.responseSubject.next(response);
        }

      }));
  }


}
