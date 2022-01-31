/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProductForAdmin
// ====================================================

export interface getProductForAdmin_GetAllProductsForAdmin {
  __typename: "ProductDto";
  id: number;
  name: string | null;
  category: string | null;
  price: number;
  sellingPrice: number;
  number: number;
}

export interface getProductForAdmin {
  GetAllProductsForAdmin: getProductForAdmin_GetAllProductsForAdmin[];
}
