import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/model/model';
import { ProductService } from 'src/app/services/product-service/product.service';
import { RouteTitleNavigationVi, TitleManagerProduct } from 'src/app/shared/consts';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productTitle = new TitleManagerProduct;
  listProductsInformation: ProductDto[] = [];
  addNewProductUtl = RouteTitleNavigationVi.TitleManageAddProduct
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProductForAdmin();
  }
  getAllProductForAdmin(){
    this.productService.getAllProduct().subscribe(({data}) => {
      if (!!data && !!data.GetAllProducts) {
        data.GetAllProducts.forEach(element => {
           this.listProductsInformation.push(element as unknown as ProductDto );
        });
      }
    });
  }

}
