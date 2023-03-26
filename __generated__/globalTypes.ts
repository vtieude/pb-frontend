/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface EditUserModel {
  userId: number;
  userName: string;
  roleName: string;
  phoneNumber?: string | null;
  password?: string | null;
}

export interface NewUser {
  userName: string;
  email: string;
  password: string;
  roleName: string;
  phoneNumber?: string | null;
}

export interface OverviewUserSaleFilter {
  UserName?: string | null;
  DateTime?: any | null;
}

export interface Pagination {
  PerPage?: number | null;
  Page?: number | null;
  Sort?: string[] | null;
}

export interface ProductInputModel {
  id?: number | null;
  name: string;
  key: string;
  category?: string | null;
  price: number;
  sellingPrice: number;
  number: number;
  description?: string | null;
  imageBase64?: string | null;
  imagePrefix?: string | null;
}

export interface ProfileImage {
  fileName?: string | null;
  fileBase64?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
