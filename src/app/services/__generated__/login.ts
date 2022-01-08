/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login {
  __typename: "UserDto";
  id: number;
  token: string;
  role: string;
  userName: string;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  email: string;
  password: string;
}
