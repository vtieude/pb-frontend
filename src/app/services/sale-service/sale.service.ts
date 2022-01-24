import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { saleOveriewVariablesInput } from 'src/app/model/model';
import { GraphqlQuery } from 'src/app/shared/consts';
import { saleOverview } from 'src/app/shared/__generated__/saleOverview';
import { OverviewUserSaleFilter, Pagination } from '__generated__/globalTypes';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getUserSaleOverview(filter: OverviewUserSaleFilter, page: Pagination | null) {
    let inputLogin = new saleOveriewVariablesInput(filter);
    return this.apollo.watchQuery<saleOverview>({
      query: GraphqlQuery.SaleQueryGetSaleOverview,
      variables: inputLogin
    }).valueChanges;
  }
}
