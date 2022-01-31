import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/model/model';
import { ProductService } from 'src/app/services/product-service/product.service';
import { TitleManagerProduct } from 'src/app/shared/consts';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productTitle = new TitleManagerProduct;
  listProductsInformation: ProductDto[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProductForAdmin();
  }
  getAllProductForAdmin(){
    this.productService.getAllProductForAdmin().subscribe(({data}) => {
      if (!!data && !!data.GetAllProductsForAdmin) {
        data.GetAllProductsForAdmin.forEach(element => {
           this.listProductsInformation.push(element as unknown as ProductDto );
        });
      }
    });
  }

}
