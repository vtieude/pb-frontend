import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { createNewUserVariablesInput, User } from 'src/app/model/model';
import { NewUser } from '__generated__/globalTypes';
import { getAllUsers } from './__generated__/getAllUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  queryUser: DocumentNode = gql`query getAllUsers {
    GetAllUsers {
      id
      Username
      Email
      RoleLabel
      Role
      Active
    }
  }`;
  constructor(private apollo: Apollo) { }

  getAllUsers() {
    return this.apollo.watchQuery<getAllUsers>({
      query: this.queryUser
    }).valueChanges;
  }
  createNewUsers(newUser: NewUser) {
    let newUserMutation = gql`
    mutation createUser($input:  NewUser!) {
      createUser(input: $input ) {
          id
        }
      }
      `;
    ;
    let variable = new createNewUserVariablesInput;
    variable.input = newUser;
    return this.apollo.mutate<User>({
      mutation: newUserMutation,
      variables: variable,
      refetchQueries:[{query:this.queryUser}]
    });
  }
}
