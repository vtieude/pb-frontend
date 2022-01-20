import { Component, OnInit } from '@angular/core';
import { saleFilter } from 'src/app/model/model';
import { SaleService } from 'src/app/services/sale-service/sale.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { Product, TopSelling } from '../../project-of-month/project-data';

@Component({
  selector: 'app-overview-user-sale',
  templateUrl: './overview-user-sale.component.html',
  styleUrls: ['./overview-user-sale.component.css']
})
export class OverviewUserSaleComponent implements OnInit {

  listUserTilte: String[];
  topSelling: Product[];
  currentYear: number = new Date().getFullYear();
  constructor(private helperService: HelperService, private saleService: SaleService) {
    this.listUserTilte = this.helperService.userInformation.ListUserDashBoardSalesOffInformation;
    this.topSelling = TopSelling;
  }

  ngOnInit(): void {
    this.helperService.userInformationSubject.subscribe(data => {
      this.listUserTilte = data.ListUserDashBoardSalesOffInformation;
    })
    this.saleService.getUserSaleOverview(new saleFilter(null, null), null).subscribe(({data}) => {
      if (!!data && !!data.GetOverviewUsersSales &&  data.GetOverviewUsersSales.length > 0) {
      }
    })
  }
}
