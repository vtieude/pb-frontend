import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ProductDto } from 'src/app/model/model';
import { GraphqlQuery } from 'src/app/shared/consts';
import { createProductVariables } from 'src/app/shared/__generated__/createProduct';
import { deleteProductVariables } from 'src/app/shared/__generated__/deleteProduct';
import { getProducts } from 'src/app/shared/__generated__/getProducts';
import { NewProduct } from '__generated__/globalTypes';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apollo: Apollo) { 
  }
  getAllProduct() {
    return this.apollo.watchQuery<getProducts>({
      query: GraphqlQuery.ProductQueryGetAllProducts
      // pollInterval: 1000,
    }).valueChanges;
  }

  deleteProduct(productId: number) {
    const letVariable:deleteProductVariables  = {
      productId : productId
    }
    return this.apollo.mutate<boolean>({
      mutation: GraphqlQuery.ProductMutationDeleteProduct,
      variables: letVariable,
      refetchQueries:[{query: GraphqlQuery.ProductQueryGetAllProducts}]
    });
  }

  createProduct(input : NewProduct) {
    const letVariable: createProductVariables  = {
      input : input
    }
    
    return this.apollo.mutate<ProductDto>({
      mutation: GraphqlQuery.ProductMutationCreateNew,
      variables: letVariable,
      refetchQueries:[{query: GraphqlQuery.ProductQueryGetAllProducts}]
    });
  }
}
