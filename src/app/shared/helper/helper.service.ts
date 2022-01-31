import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Role } from 'src/app/model/model';
import { AuthService } from 'src/app/services/auth.service';
import { RouteTitleNavigationVi } from '../consts';
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
       if (!data || !(data.id > 0) || data.Role === "") {
         this.resetDataWhenUserLogout();
         this.updateNextUserInformation();
         return;
       }
      if (data.Role === Role.Admin) {
        this.userInformation.ListUserDashBoardSalesOffInformation = RouteTitleNavigationVi.AdminListUserSalesOffDashboard;
      }
      if (data.Role === Role.SuperAdmin) {
        this.userInformation.ListUserDashBoardSalesOffInformation = RouteTitleNavigationVi.SuperAdminListUserSalesOffDashboard;
      }
      this.combineUserMenuItem(data.Role || "")
      this.updateNextUserInformation();
    });
  }
  combineUserMenuItem(role: string) {
    this.userInformation.ListMenuItem = []; 
    if (role === Role.User) {
      this.userInformation.ListMenuItem = RouteTitleNavigationVi.MenuItemNormalUser;
    }
    const staffMenuPermission = [ ...RouteTitleNavigationVi.MenuItemNormalUser, ...RouteTitleNavigationVi.MenuItemStaff];
    if (role === Role.Staff) {
      this.userInformation.ListMenuItem = staffMenuPermission;
      this.userInformation.ListRoleByUserLogin = [{role: "user", label: "Người dùng", isSelected: true}];
    }
    if (role === Role.SuperAdmin || role === Role.Admin) {
      this.userInformation.ListMenuItem = [ ...staffMenuPermission, ...RouteTitleNavigationVi.MenuItemSuperAdmin];
      this.userInformation.ListRoleByUserLogin = [{role: "admin", label: "Quản lí", isSelected: false}, 
      {role: "staff", label: "Nhân viên", isSelected: false}
      , {role: "user", label: "Người dùng", isSelected: true}];
      if (role === Role.SuperAdmin) {
        this.userInformation.ListRoleByUserLogin = [...this.userInformation.ListRoleByUserLogin, ...[{role: "super_admin", label: "Super Admin", isSelected: false}]];
      }
    }
    this.userInformation.ListMenuItem = [...this.userInformation.ListMenuItem, ...RouteTitleNavigationVi.UnusedMenuItem];
  }
  resetDataWhenUserLogout() {
    this.userInformation = new UserRoleInformation();
  }
}

export class UserRoleInformation {
  ListUserDashBoardSalesOffInformation!: string[];
  ListMenuItem!: RouteInfo[];
  ListRoleByUserLogin: any[] = [];
}
