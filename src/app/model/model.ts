import { Injectable } from '@angular/core';
import { NewUser, OverviewUserSaleFilter, Pagination } from '__generated__/globalTypes';
import { createUserVariables } from '../shared/__generated__/createUser';
import { getAllUsers_GetAllUsers } from '../shared/__generated__/getAllUsers';
import { getProducts_GetAllProducts } from '../shared/__generated__/getProducts';
import { loginVariables } from '../shared/__generated__/login';
import { saleOverviewVariables } from '../shared/__generated__/saleOverview';
@Injectable()
export class Todo {
    id: string | undefined;
    message: string | undefined;
    complete: boolean | undefined;
  }
export class User implements getAllUsers_GetAllUsers{
    PhoneNumber!: string | null;
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

export class ProductDto implements getProducts_GetAllProducts {
  __typename!: 'ProductDto';
  id!: number;
  name!: string | null;
  category!: string | null;
  price!: number;
  sellingPrice!: number;
  number!: number;

}

export enum Role {
  User = 'user',
  Admin = 'admin',
  Staff = 'staff',
  SuperAdmin = "super_admin"
}

