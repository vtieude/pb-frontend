import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor(private auth: AuthService) {
    this.subtitle = 'This is some text within a card block.';
     this.auth.getAllUsers().then((response) => {
     }, (reponseError) => {
     });
  }







  ngAfterViewInit() { }
}
