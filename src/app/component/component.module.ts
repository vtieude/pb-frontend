import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { NgbdtypeheadBasicComponent } from './typehead/typehead.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ListUserComponent } from './manage-user/list-user/list-user.component';
import { PipesModule } from '../shared/pipe/pipes.module';
import { ListProductComponent } from './manage-product/list-product/list-product.component';
import { AddProductComponent } from './manage-product/addProduct/add-product/add-product.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ManageSaleComponent } from './manage-sale/manage-sale/manage-sale.component';
import { EditProductComponent } from './manage-product/edit-product/edit-product.component';
import { SalingProductComponent } from './manage-sale/sale/saling-product/saling-product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PipesModule
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdpaginationBasicComponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdPopTooltipComponent,
    NgbdratingBasicComponent,
    NgbdtabsBasicComponent,
    NgbdtimepickerBasicComponent,
    NgbdtypeheadBasicComponent,
    ButtonsComponent,
    CardsComponent,
    ListUserComponent,
    ListProductComponent,
    AddProductComponent,
    ProfileComponent,
    ManageSaleComponent,
    EditProductComponent,
    SalingProductComponent
  ]
})
export class ComponentsModule {}
