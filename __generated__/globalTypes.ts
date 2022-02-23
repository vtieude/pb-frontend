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

//==============================================================
// END Enums and Input Objects
//==============================================================
