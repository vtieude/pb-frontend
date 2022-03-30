import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/model/model';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Consts, RouteTitleNavigationVi, TitleManagerProduct } from 'src/app/shared/consts';
import { SpinnerService } from 'src/app/shared/spinner.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productTitle = new TitleManagerProduct;
  listProductsInformation: ProductDto[] = [];
  addNewProductUtl = RouteTitleNavigationVi.TitleManageAddProduct
  constructor(private productService: ProductService, private spinnerToast: SpinnerService) { }

  ngOnInit(): void {
    this.getAllProductForAdmin();
  }
  getAllProductForAdmin(){
    

    this.productService.getAllProduct().subscribe(({data}) => {
      this.listProductsInformation = [];
      if (!!data && !!data.GetAllProducts) {
        data.GetAllProducts.forEach(element => {
           this.listProductsInformation.push(element as unknown as ProductDto );
        });
      }
    }, (err) => {
      this.listProductsInformation = [];
    });
  }
  editProduct(editProduct: ProductDto) {

  }
  deleteProduct(product: ProductDto, ) {
    if(confirm("Are you sure to delete "+ product.name)) {
      this.productService.deleteProduct(product.id).subscribe(({data}) => {
        this.spinnerToast.showToastSuccess("", Consts.TitleSuccess);
        this.getAllProductForAdmin();
      }, (err) => {
        this.spinnerToast.showError("Error", err);
      });
    }
  }

}
