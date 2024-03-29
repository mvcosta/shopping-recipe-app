import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const headers = new HttpHeaders({
          Authorization: 'Token ' + user.token,
        });
        const modifiedReq = req.clone({
          headers: headers,
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
