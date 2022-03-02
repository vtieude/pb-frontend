import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consts, RouteTitleNavigationVi, TitleManagerProduct } from 'src/app/shared/consts';
import { ProductService } from 'src/app/services/product-service/product.service';
import { NewProduct } from '__generated__/globalTypes';
import { SpinnerService } from 'src/app/shared/spinner.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productTitle = new TitleManagerProduct;
  addProductForm!: FormGroup;
  submitted = false;
  loading =false ;
  constant = Consts;
  constructor(private formBuilder: FormBuilder,
    private service: ProductService,
    private router: Router,
    private spinnerToast: SpinnerService) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      productname: ['', Validators.required],
      totalproduct: ['', Validators.required],
      productkey: ['', Validators.required],
      description: [''],
      sellingprice:['', Validators.required],
      price:['', Validators.required],
      category:['', Validators.required]
    });
  }
  get f() { 
    if (!this.addProductForm) {
      this.addProductForm = this.formBuilder.group({});
    }
    return this.addProductForm.controls; 
  }
  onSubmitCreateProduct() {
    this.submitted = true;
    if (!this.addProductForm.valid) {
      return;      
    }
    this.loading = true;
    const newProduct: NewProduct = {
      key: this.f.productkey.value,
      name: this.f.productname.value,
      price: this.f.price.value,
      sellingPrice: this.f.sellingprice.value,
      number: this.f.totalproduct.value,
      description: this.f.description.value,
      category: this.f.category.value
    }
    this.service.createProduct(newProduct).subscribe(({data}) => {
      this.loading = false;
      this.spinnerToast.showToastSuccess("", Consts.TitleSuccess);
      this.router.navigate([RouteTitleNavigationVi.TitleManageProduct]);
    }, (err) => {
      this.loading = false;
      this.spinnerToast.showError("Error", err);
    })
    this.loading = false;

  }
  onCancelCreateProduct() {
    if (confirm(Consts.ConfirmCancel)) {
      this.router.navigate([RouteTitleNavigationVi.TitleManageProduct]);
    }
  }
}
