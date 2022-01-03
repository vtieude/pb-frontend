import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, UserLoginDtoResult } from '../model/model';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usersQuery: QueryRef<{users: User}, { }>
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public isLogin: boolean = false;
  constructor(private http: HttpClient, private apollo: Apollo, private router: Router)  {
    this.usersQuery = this.apollo.watchQuery({
      query: gql`query characters {
        GetAllUsers {
          id
        }
      }`
    });
    const localUser = localStorage.getItem('currentUser') || '';
    const testUser = new User();
    this.currentUserSubject = new BehaviorSubject<User>(testUser);
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localUser));
    this.currentUser = this.currentUserSubject.asObservable();

  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
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
  return this.apollo.mutate<UserLoginDtoResult>({
    mutation: loginMutation,
    variables: {
      email: username,
      password: password
    }
  });
}

async getAllUsers(): Promise<User> {
  const result = await this.usersQuery.refetch({  });
  return result.data.users;
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
  localStorage.removeItem('token');
  // tslint:disable-next-line: prefer-const
  let nullUser!: User ;
  this.apollo.getClient().resetStore();
  this.isLogin = false;
  this.router.navigate(['/login']);
  this.currentUserSubject.next(nullUser);
}
}
