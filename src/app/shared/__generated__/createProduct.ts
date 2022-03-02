/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewProduct } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createProduct
// ====================================================

export interface createProduct_login {
  __typename: "UserDto";
  id: number;
}

export interface createProduct {
  login: createProduct_login;
}

export interface createProductVariables {
  input: NewProduct;
}
