/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OverviewUserSaleFilter, Pagination } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: saleOverview
// ====================================================

export interface saleOverview_GetOverviewUsersSales {
  __typename: "OverviewUserSaleDto";
  UserName: string;
  UserRole: string;
  UserEmail: string | null;
  TotalSaledProduct: number;
  EarningMoney: number;
}

export interface saleOverview {
  GetOverviewUsersSales: saleOverview_GetOverviewUsersSales[];
}

export interface saleOverviewVariables {
  fitler?: OverviewUserSaleFilter | null;
  page?: Pagination | null;
}
