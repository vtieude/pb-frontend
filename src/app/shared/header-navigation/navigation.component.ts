import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Output()
  toggleSidebar = new EventEmitter<void>();
  public isLoggin = false;
  public showSearch = false;

  constructor(private auth: AuthService) {
    this.isLoggin = this.auth.isAuthenticated();
    this.auth.isLoginSubject.subscribe(data => {
      this.isLoggin = data;
    });
  }
  logOut() {
    this.auth.logout();
  }
}
