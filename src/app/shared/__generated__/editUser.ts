/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditUserModel } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: editUser
// ====================================================

export interface editUser_editUser {
  __typename: "User";
  id: number;
}

export interface editUser {
  editUser: editUser_editUser;
}

export interface editUserVariables {
  input: EditUserModel;
}
