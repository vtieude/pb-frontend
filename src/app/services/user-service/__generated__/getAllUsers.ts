/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllUsers
// ====================================================

export interface getAllUsers_GetAllUsers {
  __typename: "User";
  id: number;
  Username: string;
  Email: string;
  RoleLabel: string;
  Role: string;
  Active: boolean | null;
}

export interface getAllUsers {
  GetAllUsers: getAllUsers_GetAllUsers[];
}
