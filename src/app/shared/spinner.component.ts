import {
  Component,
  Input,
  OnDestroy,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SpinnerService } from './spinner.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  template: `<div *ngIf="isSpinnerVisible">
        <div class="spinner" id="loading">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
  styleUrls: ['./spinner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;

  @Input()
  public backgroundColor = 'rgba(0, 115, 170, 0.69)';

  constructor(
    private router: Router,
    private loader: SpinnerService,
    @Inject(DOCUMENT) private document: Document
  ) {
     this.loader.isLoading.subscribe(x => {
      this.isSpinnerVisible = x;
    })
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.isSpinnerVisible = false;
        }
      },
      () => {
        this.isSpinnerVisible = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }
}
