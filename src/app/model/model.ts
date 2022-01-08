import { Injectable } from '@angular/core';
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

export enum Role {
  User = 'user',
  Admin = 'admin'
}
