import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from '../viewmodel/login-view-model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(loginViewModel: LoginViewModel): Observable<any> {
    // debugger;
   
    return this.httpClient.post<any>("http://localhost:5249/api/login", loginViewModel, { responseType: "json", observe: "response" })
      .pipe(map(response => {
        if (response) {
          console.log(response);
        }

      }));
  }


}
