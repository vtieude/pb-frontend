import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient)  {
    const localUser = localStorage.getItem('currentUser') || '';
    const testUser = new User();
    testUser.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjN9.PZLMJBT9OIVG2qgp9hQr685oVYFgRgWpcSPmNcw6y7M';
    this.currentUserSubject = new BehaviorSubject<User>(testUser);
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localUser));
    this.currentUser = this.currentUserSubject.asObservable();

  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
login(username: string, password: string) {
  return this.http.post<any>(`${environment.gateway}/users/authenticate`, { username, password })
      .pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
          }

          return user;
      }));
}

isAuthenticated(): boolean {
  if (this.currentUserValue.expires_at <= 0 || !this.currentUserValue.expires_at) {
    return true;
  }
  return new Date().getTime() < this.currentUserValue.expires_at;
}


logout(): void {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  // tslint:disable-next-line: prefer-const
  let nullUser!: User ;
  this.currentUserSubject.next(nullUser);
}
}
