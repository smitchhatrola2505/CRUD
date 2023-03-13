import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingUp } from '../sing-up';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  constructor(private httpClient: HttpClient) { }

  
  insertProject(newSingUp: SingUp): Observable<SingUp>
  {
    return this.httpClient.post<SingUp>( "/api/singUp", newSingUp, { responseType: "json" });
  }
}
