import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, finalize } from 'rxjs/operators';
import { SpinnerService } from '../shared/spinner.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthService,
        private readonly spinnerOverlayService: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        this.spinnerOverlayService.show();
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.auth.logout();
                location.reload();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }) ,
            finalize(() => this.spinnerOverlayService.hide()));
    }
}
