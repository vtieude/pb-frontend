/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductInputModel } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createProduct
// ====================================================

export interface createProduct_createNewProduct {
  __typename: "ProductDto";
  id: number;
}

export interface createProduct {
  createNewProduct: createProduct_createNewProduct;
}

export interface createProductVariables {
  input: ProductInputModel;
}
