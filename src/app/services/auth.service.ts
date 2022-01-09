import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loginVariablesInput, User } from '../model/model';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { login } from './__generated__/login';
import { getMe } from './__generated__/getMe';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usersQuery: QueryRef<{users: User}, { }>
  public currentUserSubject: BehaviorSubject<User>;
  public isLoginSubject = new Subject<boolean>();
  public isUserLogin = false;
  private currentUser: User;
  constructor(private http: HttpClient, private apollo: Apollo, private router: Router)  {
    this.usersQuery = this.apollo.watchQuery({
      query: gql`query characters {
        GetAllUsers {
          id
        }
      }`
    });
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
      this.currentUser.userName = data.Me?.userName;
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

async getAllUsers(): Promise<User> {
  const result = await this.usersQuery.refetch({  });
  return result.data.users;
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
  this.apollo.getClient().resetStore();
  this.isUserLogin = false;
  this.isLoginSubject.next(this.isUserLogin);
  this.router.navigate(['/login']);
  this.currentUserSubject.next(nullUser);
}
}
