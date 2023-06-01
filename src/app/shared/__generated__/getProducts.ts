/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProducts
// ====================================================

export interface getProducts_GetAllProducts {
  __typename: "ProductDto";
  id: number;
  name: string | null;
  category: string | null;
  price: number;
  sellingPrice: number;
  number: number;
  description: string | null;
}

export interface getProducts {
  GetAllProducts: getProducts_GetAllProducts[];
}
