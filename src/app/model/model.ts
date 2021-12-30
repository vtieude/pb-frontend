import { Injectable } from '@angular/core';
@Injectable()
export class Todo {
    id: string | undefined;
    message: string | undefined;
    complete: boolean | undefined;
  }
export class User {
  id!: number;
    username!: string;
    password!: string;
    firstName!: string;
    lastName!: string;
    token?: string;
    role: Role | undefined;
    expires_at!: number;
}

export enum Role {
  User = 'User',
  Admin = 'Admin'
}
