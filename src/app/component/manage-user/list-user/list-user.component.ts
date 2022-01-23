import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/model';
import { UserService } from 'src/app/services/user-service/user-service.service';
import { Consts, TitleManagerStaff } from 'src/app/shared/consts';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { NewUser } from '__generated__/globalTypes';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  staffTitle : TitleManagerStaff = new TitleManagerStaff;
  listUsersInformation: User[] = [];
  btnEdit = Consts.TitleEdit;
  btnDelete = Consts.TitleDelete;
  loading = false;
  submitted = false;
  error = '';
  staffForm!: FormGroup;
  listRole: any[];
  constructor(private userService: UserService, 
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private helper: HelperService,
    private spinnerToast: SpinnerService) {
      this.listRole = this.helper.userInformation?.ListRoleByUserLogin || [];
     }

  ngOnInit(): void {
    this.helper.userInformationSubject.subscribe(data => {
      if (!!data) {
        this.listRole = data.ListRoleByUserLogin;
      } else {
        this.listRole = [];
      }
      this.setValueForRoleFormControl();
    });
    this.staffForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      role: [this.setValueForRoleFormControl(), Validators.required],
      email: ['', Validators.required],
      phoneNumber:['']
    });
    this.loadListUserData();
  }
  get f() { 
    if (!this.staffForm) {
      this.staffForm = this.formBuilder.group({});
    }
    return this.staffForm.controls; }
  loadListUserData() {
    this.userService.getAllUsers().subscribe(({data}): void => {
      this.listUsersInformation = data.GetAllUsers as unknown as User[];
    }, 
    () => {
    });
  }
  setValueForRoleFormControl() {
    if (!!this.listRole){
    this.listRole.forEach(element => {
      if (element.isSelected && !!this.f.role) {
        this.f.role.setValue(element.role);
      }
    });
    }
  }
  openModelCreateUser(content:string) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  onSubmitCreateUser(event: Event) {
    this.submitted = true;
    if (this.f.password.value !== this.f.password2.value) {
      this.f.password2.setErrors({pwdNotMatch:true})
      return;
    }
    // stop here if form is invalid
    if (this.staffForm.invalid) {
        return;
    }
    this.error = "";
    this.loading = true;
    const newUserInput: NewUser = {
      userName: this.f.username.value,
      email: this.f.email.value,
      password: this.f.password.value,
      roleName: this.f.role.value,
      phoneNumber: this.f.phoneNumber.value?.toString()
    };
    this.userService.createNewUsers(newUserInput).subscribe(({data}) => {
      this.loading = false;
      this.spinnerToast.showToastSuccess("", "Sucess");
      this.modalService.dismissAll();
    }, (err) => {
      this.loading = false;
      this.spinnerToast.showError("Error", err);
    });
}
}
