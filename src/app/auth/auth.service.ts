import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

interface AuthResponseData {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signin(username: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://localhost:8000/api/auth/', {
        username: username,
        password: password,
      })
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unknown error ocurred!';
          if (!errorRes.error || !errorRes.error.non_field_errors) {
            return throwError(errorMessage);
          }
          errorMessage = errorRes.error.non_field_errors[0];
          return throwError(errorMessage);
        }),
        tap((resData) => {
          const user = new User(username, resData.token);
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
        })
      );
  }

  autoLogin() {
    const userData: {
      login: string;
      _token: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.login, userData._token);

    this.user.next(loadedUser);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
  }

  autoLogout() {}
}
