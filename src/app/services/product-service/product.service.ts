import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ProductDto } from 'src/app/model/model';
import { GraphqlQuery } from 'src/app/shared/consts';
import { createProductVariables } from 'src/app/shared/__generated__/createProduct';
import { deleteProductVariables } from 'src/app/shared/__generated__/deleteProduct';
import { editProductVariables } from 'src/app/shared/__generated__/editProduct';
import { getProductDetail, getProductDetailVariables, getProductDetail_GetProductDetail } from 'src/app/shared/__generated__/getProductDetail';
import { getProducts } from 'src/app/shared/__generated__/getProducts';
import { ProductInputModel } from '__generated__/globalTypes';

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

  createProduct(input : ProductInputModel) {
    const letVariable: createProductVariables  = {
      input : input
    }
    
    return this.apollo.mutate<ProductDto>({
      mutation: GraphqlQuery.ProductMutationCreateNew,
      variables: letVariable,
      refetchQueries:[{query: GraphqlQuery.ProductQueryGetAllProducts}]
    });
  }
  getProductDetail(id: number) {
    const variab : getProductDetailVariables = {
      id : id
    }
    return this.apollo.watchQuery<getProductDetail>({
      query: GraphqlQuery.ProductQueryGetProductDetail,
      variables: variab,
      // pollInterval: 1000,
      fetchPolicy: 'no-cache'
    }).valueChanges;
  }


  editProduct(productEdit: ProductInputModel) {
    let variab: editProductVariables = {
      product: productEdit
    }
    return this.apollo.mutate<boolean>({
      mutation: GraphqlQuery.ProductMutationEditProduct,
      variables: variab,
      refetchQueries:[{query: GraphqlQuery.ProductQueryGetAllProducts}]
    })
  }

}
