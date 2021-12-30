import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loading = false;
  users: User[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
