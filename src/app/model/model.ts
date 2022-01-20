import { Injectable } from '@angular/core';
import { OverviewUserSaleFilter, Pagination } from '__generated__/globalTypes';
import { saleOverviewVariables } from '../services/sale-service/__generated__/saleOverview';
import { loginVariables } from '../services/__generated__/login';
@Injectable()
export class Todo {
    id: string | undefined;
    message: string | undefined;
    complete: boolean | undefined;
  }
export class User {
    id!: number;
    userName!: string;
    password!: string;
    firstName!: string;
    lastName!: string;
    token?: string;
    role: string | undefined;
    expires_at!: number;
}
export class loginVariablesInput implements loginVariables {
  email!: string;
  password!: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class saleOveriewVariablesInput implements saleOverviewVariables {
  fitler?: OverviewUserSaleFilter | null;
  page?: Pagination | null;
  constructor(fitler: OverviewUserSaleFilter) {
   this.fitler = fitler;
  }
}

export class saleFilter implements OverviewUserSaleFilter {
  UserName?: string | null;
  DateTime?: any | null;
  constructor(userName: string | null, dateTime: any | null) {
   this.UserName = userName;
   this.DateTime = dateTime;
  }
}

export enum Role {
  User = 'user',
  Admin = 'admin',
  Staff = 'staff',
  SuperAdmin = "super_admin"
}
