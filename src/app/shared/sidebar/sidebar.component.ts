import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../helper/helper.service';
//declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems:RouteInfo[]=[];
  // this is for the open close
  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private helper: HelperService
  ) {}

  // End open close
  ngOnInit() {
    if (!!this.helper.userInformation &&  !!this.helper.userInformation && !!this.helper.userInformation.ListMenuItem) {
      this.sidebarnavItems = this.helper.userInformation.ListMenuItem.filter(sidebarnavItem => sidebarnavItem)
    }
    this.helper.userInformationSubject.subscribe(data => {
      if (!!data && !!data.ListMenuItem ) {
        this.sidebarnavItems = data.ListMenuItem.filter(sidebarnavItem => sidebarnavItem);
      } else {
        this.sidebarnavItems = [];
      }
    })
  }
}
