import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { loginVariablesInput, User } from '../model/model';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Router } from '@angular/router';
import { login } from './__generated__/login';
import { getMe } from './__generated__/getMe';
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
  const query = gql`query getMe {
    Me {
      id
      role
      userName
    }
  }`;
  if (!!token && !(this.currentUser.id > 0)) {
    this.apollo.watchQuery<getMe>({
      query: query
    }).valueChanges.subscribe(({data}) => {
      this.currentUser.Username = data.Me?.userName;
      this.currentUser.id = data.Me?.id;
      this.currentUser.role = data.Me?.role;
      this.nextCurrentUserLogin()
      this.setUserLogin();
    });
  } 
}

 login(username: string, password: string)  {
  let loginMutation = gql`
  mutation login($email: String!,$password: String!) {
    login(email: $email,password: $password ) {
      id
      token
      role
      userName
    }
  }
`;
 let inputLogin = new loginVariablesInput(username, password);
  return this.apollo.mutate<login>({
    mutation: loginMutation,
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
