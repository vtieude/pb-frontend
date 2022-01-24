import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { createNewUserVariablesInput, User } from 'src/app/model/model';
import { GraphqlQuery } from 'src/app/shared/consts';
import { deleteUserVariables } from 'src/app/shared/__generated__/deleteUser';
import { getAllUsers } from 'src/app/shared/__generated__/getAllUsers';
import { NewUser } from '__generated__/globalTypes';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo) { }

  getAllUsers() {
    return this.apollo.watchQuery<getAllUsers>({
      query: GraphqlQuery.UserQueryGetAllUser
    }).valueChanges;
  }
  deleteUser(userId: number) {
    const letVariable:deleteUserVariables  = {
      userId : userId
    }
    return this.apollo.mutate<User>({
      mutation: GraphqlQuery.UserMutationDeleteUser,
      variables: letVariable,
      refetchQueries:[{query: GraphqlQuery.UserQueryGetAllUser}]
    });
  }
  createNewUsers(newUser: NewUser) {
    let variable = new createNewUserVariablesInput;
    variable.input = newUser;
    return this.apollo.mutate<User>({
      mutation: GraphqlQuery.UserNewUserMutation,
      variables: variable,
      refetchQueries:[{query: GraphqlQuery.UserQueryGetAllUser}]
    });
  }
}
