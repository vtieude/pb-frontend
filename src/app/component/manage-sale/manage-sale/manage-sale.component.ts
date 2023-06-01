import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/model/model';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-manage-sale',
  templateUrl: './manage-sale.component.html',
  styleUrls: ['./manage-sale.component.css']
})
export class ManageSaleComponent implements OnInit {
  listProductsInformation: ProductDto[] = [];
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
