/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProductForStaff
// ====================================================

export interface getProductForStaff_GetAllProductsForStaff {
  __typename: "ProductDto";
  id: number;
  name: string | null;
  category: string | null;
  price: number;
  sellingPrice: number;
  number: number;
}

export interface getProductForStaff {
  GetAllProductsForStaff: getProductForStaff_GetAllProductsForStaff[];
}
