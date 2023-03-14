import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SingUp } from '../sing-up';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  

  constructor(private httpClient: HttpClient) { }

  public getSingupData():Observable<SingUp[]>
  {
    return this.httpClient.get<SingUp[]>("http://localhost:5249/api/singUp", { responseType: "json" });
  }

  public insertProject(signUpViewModel: SingUp): Observable<any> {
    // debugger;
  
    return this.httpClient.post<any>("http://localhost:5249/api/singUp", signUpViewModel, { responseType: "json", observe: "response" })
      .pipe(map(response => {
        if (response.ok == true) {
          console.log(response);
        }
      
      }));
  }
}
