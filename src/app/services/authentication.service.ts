import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export interface ILoginContext {
  email: string;
  password: string;
  remember?: boolean;
}
export interface ILoginResponse {
  email: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(
    protected httpClient: HttpClient,
    protected http: HttpClient
  ) { }
  
    login(context: ILoginContext){
    return this.httpClient.post<ILoginResponse>('https://glacial-mesa-99114.herokuapp.com/Start/api/login', context, httpOptions).pipe(
      tap((response: ILoginResponse) => {
        return of(response);
      }),
      );
  }

}
