import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consts, RouteTitleNavigationVi, TitleManagerProduct } from 'src/app/shared/consts';
import { ProductService } from 'src/app/services/product-service/product.service';
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
    private router: Router) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      productname: ['', Validators.required],
      totalproduct: ['', Validators.required],
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
    console.log(this.addProductForm)
    if (!this.addProductForm.valid) {
      return;      
    }
    this.loading = true;
    this.loading = false;

  }
  onCancelCreateProduct() {
    if (confirm(Consts.ConfirmCancel)) {
      this.router.navigate([RouteTitleNavigationVi.TitleManageProduct]);
    }
  }
}
