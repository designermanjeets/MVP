import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from '../../mvp-login/_models/login.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MvpLoginService {
  apiUrl = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  constructor(
    private http: HttpClient
  ) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(`${environment.apiUrl}/login`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in session storage to keep user logged in between page refreshes
            sessionStorage.setItem('currentUser', JSON.stringify(user.payload));
            this.currentUserSubject.next(user.payload);
            const tokens = {
              token: user.payload.token,
              refreshToken: user.payload.refreshToken
            }
            this.storeTokens(tokens);
            return user.payload;
      }));
  }

  logout() {
      // remove user from session storage to log user out
      sessionStorage.removeItem('currentUser');
      ['currentUser', 'JWT_TOKEN', 'REFRESH_TOKEN'].forEach(element => {
        sessionStorage.removeItem(element);
      });
      this.currentUserSubject.next(null);
  }

  // TODO :: Future Implementations || JWT

  getJwtToken() {
    return sessionStorage.getItem(this.JWT_TOKEN);
  }

  private getRefreshToken() {
    return sessionStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(token: string) {
    sessionStorage.setItem(this.JWT_TOKEN, token);
  }

  private storeTokens(tokens: any) {
    sessionStorage.setItem(this.JWT_TOKEN, tokens.token);
    sessionStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  refreshToken() {
    return this.http.post<any>(`${this.apiUrl}/token`, {refreshToken: this.getRefreshToken()})
      .pipe(tap((tokens: any) => {
        this.storeJwtToken(tokens.token);
        return tokens;
    }));
  }

}