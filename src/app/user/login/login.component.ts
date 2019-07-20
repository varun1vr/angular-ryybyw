import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
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
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormControl;
  context:ILoginContext;

  constructor( 
   protected httpClient: HttpClient,
    protected http: HttpClient
    ) { } 

  ngOnInit() {
  }
   login(){
    return this.httpClient.post<ILoginResponse>('https://glacial-mesa-99114.herokuapp.com/Start/api/login', this.context, httpOptions).pipe(
      tap((response: ILoginResponse) => {
        return of(response);
      }),
      );
  }

}