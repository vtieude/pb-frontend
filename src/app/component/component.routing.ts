import { Routes } from '@angular/router';

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
import { ListUserComponent } from './manage-user/list-user/list-user.component';
import { Consts, RouteTitleNavigationVi } from '../shared/consts';
import { ListProductComponent } from './manage-product/list-product/list-product.component';
import { AddProductComponent } from './manage-product/addProduct/add-product/add-product.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ManageSaleComponent } from './manage-sale/manage-sale/manage-sale.component';
import { EditProductComponent } from './manage-product/edit-product/edit-product.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: RouteTitleNavigationVi.TitleProfile,
        component: ProfileComponent,
        data: {
          title: Consts.ManageProfile,
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: Consts.ManageProfile }
          ]
        }
      },
      {
        path: RouteTitleNavigationVi.TitleSale,
        component: ManageSaleComponent,
        data: {
          title: Consts.ManageSale,
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: Consts.ManageSale }
          ]
        }
      },
      {
        path: RouteTitleNavigationVi.TitleStaff,
        component: ListUserComponent,
        data: {
          title: Consts.ManageUser,
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: Consts.ManageUser }
          ]
        }
      },
      {
        path: RouteTitleNavigationVi.TitleProduct,
        component: ListProductComponent,
        data: {
          title: Consts.ManageProduct,
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: Consts.ManageProduct }
          ]
        }
      },
      {
        path: RouteTitleNavigationVi.TitleEditProduct + "/:id",
        component: EditProductComponent,
        data: {
          title: Consts.ManageEditProduct,
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: Consts.ManageEditProduct }
          ]
        }
      },
      {
        path: RouteTitleNavigationVi.TitleAddProduct,
        component: AddProductComponent,
        data: {
          title: Consts.ManageAddProduct,
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: Consts.ManageAddProduct }
          ]
        }
      },
      //Todo Unused Component
      {
        path: 'progressbar',
        component: NgbdpregressbarBasicComponent,
        data: {
          title: 'Progressbar',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Progressbar' }
          ]
        }
      },
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent,
        data: {
          title: 'Pagination',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'accordion',
        component: NgbdAccordionBasicComponent,
        data: {
          title: 'Accordion',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Accordion' }
          ]
        }
      },
      {
        path: 'alert',
        component: NgbdAlertBasicComponent,
        data: {
          title: 'Alert',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Alert' }
          ]
        }
      },
      {
        path: 'carousel',
        component: NgbdCarouselBasicComponent,
        data: {
          title: 'Carousel',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Carousel' }
          ]
        }
      },
      {
        path: 'datepicker',
        component: NgbdDatepickerBasicComponent,
        data: {
          title: 'Datepicker',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Datepicker' }
          ]
        }
      },
      {
        path: 'dropdown',
        component: NgbdDropdownBasicComponent,
        data: {
          title: 'Dropdown',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Dropdown' }
          ]
        }
      },
      {
        path: 'modal',
        component: NgbdModalBasicComponent,
        data: {
          title: 'Modal',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Modal' }
          ]
        }
      },
      {
        path: 'poptool',
        component: NgbdPopTooltipComponent,
        data: {
          title: 'Popover & Tooltip',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Popover & Tooltip' }
          ]
        }
      },
      {
        path: 'rating',
        component: NgbdratingBasicComponent,
        data: {
          title: 'Rating',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Rating' }
          ]
        }
      },
      {
        path: 'tabs',
        component: NgbdtabsBasicComponent,
        data: {
          title: 'Tabs',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Tabs' }
          ]
        }
      },
      {
        path: 'timepicker',
        component: NgbdtimepickerBasicComponent,
        data: {
          title: 'Timepicker',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Timepicker' }
          ]
        }
      },
      {
        path: 'typehead',
        component: NgbdtypeheadBasicComponent,
        data: {
          title: 'Typehead',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Typehead' }
          ]
        }
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Button',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Button' }
          ]
        }
      },
	  {
        path: 'card',
        component: CardsComponent,
        data: {
          title: 'Card',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Card' }
          ]
        }
      }
    ]
  }
];
