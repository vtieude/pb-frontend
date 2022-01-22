import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model';
import { UserService } from 'src/app/services/user-service/user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUserTilte: String[] = [ "Tên Nhân Viên",
  "Email",
  "Chức vụ", 
  "Trạng thái"];
  listUsersInformation: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(({data}): void => {
      this.listUsersInformation = data.GetAllUsers as unknown as User[];
    }, 
    () => {
    });
  }

}
