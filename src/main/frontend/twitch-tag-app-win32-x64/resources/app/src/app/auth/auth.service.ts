import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {JwtResponse} from './jwt-response';
import {LoginInfo} from './login-info';
import {SignupInfo} from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'https://twitch-tags.herokuapp.com/api/auth/signin';
  private signupUrl = 'https://twitch-tags.herokuapp.com/api/auth/signup';

  constructor(private http: HttpClient) {}

  attemptAuthentication(credentials: LoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signup(info: SignupInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
