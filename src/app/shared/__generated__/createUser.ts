/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewUser } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_createUser {
  __typename: "User";
  id: number;
}

export interface createUser {
  createUser: createUser_createUser;
}

export interface createUserVariables {
  input: NewUser;
}
