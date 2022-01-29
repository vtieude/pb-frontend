import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { createNewUserVariablesInput, User } from 'src/app/model/model';
import { GraphqlQuery } from 'src/app/shared/consts';
import { deleteUserVariables } from 'src/app/shared/__generated__/deleteUser';
import { editUserVariables } from 'src/app/shared/__generated__/editUser';
import { getAllUsers } from 'src/app/shared/__generated__/getAllUsers';
import { EditUserModel, NewUser } from '__generated__/globalTypes';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo) { }

  getAllUsers() {
    return this.apollo.watchQuery<getAllUsers>({
      query: GraphqlQuery.UserQueryGetAllUser
      // pollInterval: 1000,
    }).valueChanges;
  }
  editUser(userEdit: EditUserModel) {
    const letVariable:editUserVariables  = {
      input : userEdit
    }
    return this.apollo.mutate<User>({
      mutation: GraphqlQuery.UserMutationEditUser,
      variables: letVariable,
      refetchQueries:[{query: GraphqlQuery.UserQueryGetAllUser}]
    });
  }
  deleteUser(userId: number) {
    const letVariable:deleteUserVariables  = {
      userId : userId
    }
    return this.apollo.mutate<boolean>({
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
