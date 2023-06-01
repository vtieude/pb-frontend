import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductDto } from 'src/app/model/model';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Consts, RouteTitleNavigationVi, TitleManagerProduct } from 'src/app/shared/consts';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { getProductDetail_GetProductDetail } from 'src/app/shared/__generated__/getProductDetail';
import { ProductInputModel } from '__generated__/globalTypes';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productTitle = new TitleManagerProduct;
  editProductForm!: FormGroup;
  submitted = false;
  loading = false ;
  priceDisplay!: string;
  priceSellingDisplay!: string;
  id = 0;
  imageUrl: any;
  imageBase64!: any;
  productDetail!: getProductDetail_GetProductDetail; 
  constant = Consts;

  constructor(private formBuilder: FormBuilder,
    private service: ProductService,
    private router: Router,
    private spinnerToast: SpinnerService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.editProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: [0, Validators.required],
      productKey: ['', Validators.required],
      description: [''],
      sellingPrice:['', Validators.required],
      price:['', Validators.required],
      category:['', Validators.required],
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.id = Number(params.get('id'));
        this.getProductDetail();
      }
    })
  }

  getProductDetail() {
    this.service.getProductDetail(this.id).subscribe(({data}) => {
      if (data) {
        this.editProductForm.patchValue(data.GetProductDetail);
        this.productDetail = data.GetProductDetail;
        this.imageUrl = data.GetProductDetail.imageUrl;
      }
    })
  }

  setValueEditForm(productDto: ProductDto) {
    this.editProductForm.patchValue(productDto);
  }

  get f() { 
    if (!this.editProductForm) {
      this.editProductForm = this.formBuilder.group({});
    }
    return this.editProductForm.controls; 
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
      this.priceDisplay = this.format_number(event.toString());
    }
  }
  eventSellingPriceChange(event:any) {
    if (event) {
        this.priceSellingDisplay = this.format_number(event.toString());
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
  
  onSubmitEditProduct() {
    this.submitted = true;
    let price =  this.convertPriceStringToNumber(this.f.price.value);
    let sellingPrice = this.convertPriceStringToNumber(this.f.sellingPrice.value);

    this.checkMaxPrice(price);
    this.checkMaxSellingPrice(sellingPrice);
    if (!this.editProductForm.valid) {
      return;      
    }
    this.loading = true;
    const newProduct: ProductInputModel = {
      id: this.id,
      key: this.f.productKey.value,
      name: this.f.name.value,
      price: price,
      sellingPrice: sellingPrice,
      number: this.f.number.value,
      description: this.f.description.value,
      category: this.f.category.value,
      imageBase64: this.imageBase64
    }
    this.service.editProduct(newProduct).subscribe(() => {
      this.loading = false;
      this.spinnerToast.showToastSuccess("", Consts.TitleSuccess);
      this.router.navigate([RouteTitleNavigationVi.TitleManageProduct]);
    }, () => {
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

  onCancelEditProduct() {
    if (confirm(Consts.ConfirmCancel)) {
      this.router.navigate([RouteTitleNavigationVi.TitleManageProduct]);
    }
  }
  uploadFile(event: any) {
    const file:File = event.target.files[0];
        if (file) {
        var self = this;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // let profile: ProfileImage = {
          //   FileBase64: reader.result as string,
          //   FileName: "test"
          // }
          this.imageUrl = reader.result as string;
          this.imageBase64 = reader.result as string;
          //   this.userService.uploadImage(profile).subscribe(({data}) => {
          //     this.loading = false;
          //   }, (err) => {
          //     this.loading = false;
          //     this.spinnerToast.showError("Error", err);
          //   });
        };
    }
  }
}
