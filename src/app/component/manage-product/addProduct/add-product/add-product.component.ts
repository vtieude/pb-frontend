import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  priceDisplay!: string;
  priceSellingDisplay!: string;
  constant = Consts;

  constructor(private formBuilder: FormBuilder,
    private service: ProductService,
    private router: Router,
    private spinnerToast: SpinnerService) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      productname: ['', Validators.required],
      totalproduct: [0, Validators.required],
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
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  eventPriceChange(event:any) {
    if (event) {
      this.priceDisplay = this.format_number(event);
    }
  }
  eventSellingPriceChange(event:any) {
    if (event) {
        this.priceSellingDisplay = this.format_number(event);
    }
  }
  format_number(number: string, ...prefix: any) {
    let thousand_separator = ',',
      decimal_separator = '.',
      regex = new RegExp('[^' + decimal_separator + '\\d]', 'g'),
      number_string = number.replace(regex, '').toString(),
      split = number_string.split(decimal_separator),
      rest = split[0].length % 3,
      result = split[0].substr(0, rest),
      thousands = split[0].substr(rest).match(/\d{3}/g);

    if (thousands) {
      let separator = rest ? thousand_separator : '';
      result += separator + thousands.join(thousand_separator);
    }
    result = split[1] != undefined ? result + decimal_separator + split[1] : result;
    return prefix == undefined ? result : (result ? prefix + result : '');
  };
  
  onSubmitCreateProduct() {
    this.submitted = true;
    let price =  this.convertPriceStringToNumber(this.f.price.value);
    let sellingPrice = this.convertPriceStringToNumber(this.f.sellingprice.value);

    this.checkMaxPrice(price);
    this.checkMaxSellingPrice(sellingPrice);
    if (!this.addProductForm.valid) {
      return;      
    }
    this.loading = true;
    const newProduct: NewProduct = {
      key: this.f.productkey.value,
      name: this.f.productname.value,
      price: price,
      sellingPrice: sellingPrice,
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
      this.spinnerToast.showError("Error", "");
    })
    this.loading = false;
  }
  checkMaxSellingPrice(price: number):boolean {
    if (price > 100000000000000) {
      this.f.sellingprice.setErrors({maxPriceError:true})
      return true;
    }
    return false;
  }
  checkMaxPrice(price: number):boolean {
    if (price > 100000000000000) {
      this.f.price.setErrors({maxPriceError:true})
      return true;
    }
    return false;
  }

  convertPriceStringToNumber(price: string): number {
    if (price === undefined) {
      return 0;
    }
    price = price.replace(/,/g, "");
    if (isNaN(Number(price))) {
      return 0;
    }
    return Number(price);
  }

  onCancelCreateProduct() {
    if (confirm(Consts.ConfirmCancel)) {
      this.router.navigate([RouteTitleNavigationVi.TitleManageProduct]);
    }
  }
}
