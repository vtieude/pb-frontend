import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { Product, TopSelling } from '../project-of-month/project-data';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUserTilte: String[];
  topSelling: Product[];
  currentYear: number = new Date().getFullYear();
  constructor(private helperService: HelperService) {
    this.listUserTilte = this.helperService.userInformation.ListUserDashBoardSalesOffInformation;
    this.topSelling = TopSelling;
  }

  ngOnInit(): void {
    this.helperService.userInformationSubject.subscribe(data => {
      this.listUserTilte = data.ListUserDashBoardSalesOffInformation;
    })
  }
}
