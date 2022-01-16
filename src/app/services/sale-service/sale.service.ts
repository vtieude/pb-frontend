import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { saleOveriewVariablesInput } from 'src/app/model/model';
import { OverviewUserSaleFilter, Pagination } from '__generated__/globalTypes';
import { saleOverview } from './__generated__/saleOverview';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getUserSaleOverview(filter: OverviewUserSaleFilter, page: Pagination | null) {
    const query = gql`query saleOverview($fitler:  OverviewUserSaleFilter, $page: Pagination) {
      GetOverviewUsersSales(fitler:  $fitler, page: $page) {
        UserName
        UserRole
        UserEmail
        TotalSaledProduct
        EarningMoney
      }
    }`;
    let inputLogin = new saleOveriewVariablesInput(filter);
    return this.apollo.watchQuery<saleOverview>({
      query: query,
      variables: inputLogin
    }).valueChanges;
  }
}
