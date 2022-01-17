import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Role } from 'src/app/model/model';
import { AuthService } from 'src/app/services/auth.service';
import { Consts } from '../consts';
import { RouteInfo } from '../sidebar/sidebar.metadata';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public userInformation: UserRoleInformation;
  userInformationSubject = new Subject<UserRoleInformation>();
  constructor(private auth: AuthService) {
    this.userInformation = new UserRoleInformation;
    this.updateNextUserInformation();
    this.determinUserRolePermission()
   }

  updateNextUserInformation() {
    this.userInformationSubject.next(this.userInformation);
  }
  determinUserRolePermission(){
     this.auth.currentUserSubject.subscribe(data => {
       if (!(data.id > 0) || data.role === "") {
         this.resetDataWhenUserLogout();
         this.updateNextUserInformation();
         return;
       }
      if (data.role === Role.Admin) {
        this.userInformation.ListUserDashBoardSalesOffInformation = Consts.AdminListUserSalesOffDashboard;
      }
      if (data.role === Role.SuperAdmin) {
        this.userInformation.ListUserDashBoardSalesOffInformation = Consts.SuperAdminListUserSalesOffDashboard;
      }
      this.combineUserMenuItem(data.role || "")
      this.updateNextUserInformation();
    });
  }
  combineUserMenuItem(role: string) {
    if (role === Role.User) {
      this.userInformation.ListMenuItem = Consts.MenuItemNormalUser;
    }
    const staffMenuPermission = [ ...Consts.MenuItemNormalUser, ...Consts.MenuItemStaff];
    if (role === Role.Staff) {
      this.userInformation.ListMenuItem = staffMenuPermission;
    }
    if (role === Role.SuperAdmin || role === Role.Admin) {
      this.userInformation.ListMenuItem = [ ...staffMenuPermission, ...Consts.MenuItemSuperAdmin];
    }
    this.userInformation.ListMenuItem = [...this.userInformation.ListMenuItem, ...Consts.UnusedMenuItem];
  }
  resetDataWhenUserLogout() {
    this.userInformation = new UserRoleInformation();
  }
}

export class UserRoleInformation {
  ListUserDashBoardSalesOffInformation!: string[];
  ListMenuItem!: RouteInfo[];
}
