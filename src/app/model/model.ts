import { Injectable } from '@angular/core';
import { NewUser, OverviewUserSaleFilter, Pagination } from '__generated__/globalTypes';
import { saleOverviewVariables } from '../services/sale-service/__generated__/saleOverview';
import { createUserVariables } from '../services/user-service/__generated__/createUser';
import { getAllUsers_GetAllUsers } from '../services/user-service/__generated__/getAllUsers';
import { loginVariables } from '../services/__generated__/login';
@Injectable()
export class Todo {
    id: string | undefined;
    message: string | undefined;
    complete: boolean | undefined;
  }
export class User implements getAllUsers_GetAllUsers{
    Email!: string;
    Username!: string;
    __typename!: 'User';
    RoleLabel!: string;
    Role!: string;
    Active!: boolean | null;
    id!: number;
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
export class createNewUserVariablesInput implements createUserVariables {
  input!: NewUser;
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

