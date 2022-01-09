import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading = new Subject<boolean>();
  options: IndividualConfig;
  constructor( private toastr: ToastrService) { 
    this.options = this.toastr.toastrConfig;
    this.options.positionClass = 'toast-top-center';
    this.options.timeOut = 1500;
  }
  show() {
    this.isLoading.next(true);
}
  hide() {
      this.isLoading.next(false);
  }
  showToastSuccess(title: string, message: string) {
    this.toastr.success(message, title, this.options);
}
  showError(message: string, title: string){
    this.toastr.error(message, title)
  }
}
