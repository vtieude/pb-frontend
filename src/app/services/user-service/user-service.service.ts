import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { User } from 'src/app/model/model';
import { getAllUsers } from './__generated__/getAllUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo) { }

  getAllUsers() {
    return this.apollo.watchQuery<getAllUsers>({
      query: gql`query getAllUsers {
        GetAllUsers {
          id
          Username
          Email
          RoleLabel
          Role
          Active
        }
      }`
    }).valueChanges;
  }
}
