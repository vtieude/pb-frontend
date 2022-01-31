import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GraphqlQuery } from 'src/app/shared/consts';
import { getProductForAdmin } from 'src/app/shared/__generated__/getProductForAdmin';
import { getProductForStaff } from 'src/app/shared/__generated__/getProductForStaff';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apollo: Apollo) { 
  }
  getAllProductForAdmin() {
    return this.apollo.watchQuery<getProductForAdmin>({
      query: GraphqlQuery.ProductQueryGetAllProductForAdmin
      // pollInterval: 1000,
    }).valueChanges;
  }
  getAllProductForStaff() {
    return this.apollo.watchQuery<getProductForStaff>({
      query: GraphqlQuery.ProductQueryGetAllProductForAdmin
      // pollInterval: 1000,
    }).valueChanges;
  }
}
