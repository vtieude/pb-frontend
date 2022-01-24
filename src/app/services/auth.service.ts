import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { loginVariablesInput, User } from '../model/model';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Router } from '@angular/router';
import { GraphqlQuery } from '../shared/consts';
import { getMe } from '../shared/__generated__/getMe';
import { login } from '../shared/__generated__/login';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public currentUserSubject: BehaviorSubject<User>;
  public isLoginSubject = new Subject<boolean>();
  public isUserLogin = false;
  private currentUser: User;
  constructor(private http: HttpClient, private apollo: Apollo, private router: Router)  {
    this.currentUser = new User();
    this.currentUserSubject = new BehaviorSubject<User>(this.currentUser);
    this.me();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

setUserLogin() {
  this.isUserLogin = true;
  this.isLoginSubject.next(this.isUserLogin);
}

updateUserLoginInformation(updatedUser: User) {
  this.currentUser = updatedUser;
  this.nextCurrentUserLogin();
}

nextCurrentUserLogin() {
  this.currentUserSubject.next(this.currentUser);
}

me() {
  const token = localStorage.getItem('token');
  if (!!token && !(this.currentUser.id > 0)) {
    this.apollo.watchQuery<getMe>({
      query: GraphqlQuery.AuthQueryGetMe
    }).valueChanges.subscribe(({data}) => {
      this.currentUser.Username = data.Me?.userName;
      this.currentUser.id = data.Me?.id;
      this.currentUser.Role = data.Me?.role;
      this.nextCurrentUserLogin()
      this.setUserLogin();
    });
  } 
}

 login(username: string, password: string)  {
 let inputLogin = new loginVariablesInput(username, password);
  return this.apollo.mutate<login>({
    mutation: GraphqlQuery.AuthMutationLogin,
    variables: inputLogin
  });
}

isAuthenticated(): boolean {
  if (this.isUserLogin) {
    return this.currentUser.id > 0;
  }
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  if (isNaN(this.currentUser.id) || this.currentUser.id === 0) {
    return true;
  }
  return false;
}


logout(): void {
  // remove user from local storage to log user out
  localStorage.clear();
  // tslint:disable-next-line: prefer-const
  let nullUser!: User ;
  this.apollo.getClient().resetStore().catch((e) => {});
  this.isUserLogin = false;
  this.isLoginSubject.next(this.isUserLogin);
  this.router.navigate(['/login']);
  this.currentUserSubject.next(nullUser);
}
}
