/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProductDetail
// ====================================================

export interface getProductDetail_GetProductDetail {
  __typename: "ProductDto";
  id: number;
  name: string | null;
  category: string | null;
  price: number;
  sellingPrice: number;
  number: number;
  description: string | null;
  productKey: string;
}

export interface getProductDetail {
  GetProductDetail: getProductDetail_GetProductDetail;
}

export interface getProductDetailVariables {
  id: number;
}
