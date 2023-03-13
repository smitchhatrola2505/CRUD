import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SingUp } from '../sing-up';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  private httpClient: HttpClient | null = null;

  constructor(private httpBackend: HttpBackend) { }


  public insertProject(signUpViewModel: SingUp): Observable<any> {
    // debugger;
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>("http://localhost:5249/api/singUp", signUpViewModel, { responseType: "json", observe: "response" })
      .pipe(map(response => {
        if (response.ok == true) {
          console.log(response);
        }
      
      }));
  }
}
