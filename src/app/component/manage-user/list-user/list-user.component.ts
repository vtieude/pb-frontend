import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/model';
import { UserService } from 'src/app/services/user-service/user-service.service';
import { Consts, TitleManagerStaff } from 'src/app/shared/consts';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { EditUserModel, NewUser } from '__generated__/globalTypes';

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
  editStaffForm!: FormGroup;
  listRole: any[];
  editListRole: any[];
  userSelected: User = new User;
  constructor(private userService: UserService, 
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private helper: HelperService,
    private spinnerToast: SpinnerService) {
      this.listRole = this.helper.userInformation?.ListRoleByUserLogin || [];
      this.editListRole = this.helper.userInformation?.ListRoleByUserLogin || [];
     }

  ngOnInit(): void {
    this.helper.userInformationSubject.subscribe(data => {
      if (!!data) {
        this.listRole = data.ListRoleByUserLogin;
        this.editListRole = data.ListRoleByUserLogin
      } else {
        this.listRole = [];
        this.editListRole = [];
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
    this.editStaffForm = this.formBuilder.group({
      username: ['', Validators.required],
      role: ['', Validators.required],
      password: [{value: '******', disabled: true}],
      email: [{value: '******', disabled: true}],
      phoneNumber:['']
    });
    this.loadListUserData();
  }

  selectedUserToEdit(user: User, content: string) {
    this.userSelected = user;
    this.editControls.username.setValue(user.Username);
    this.editControls.role.setValue(user.Role);
    this.editControls.phoneNumber.setValue(user.PhoneNumber);
    this.editControls.email.setValue(user.Email);
    this.setValueRoleEditFormControl(user.Role || "");
    this.editStaffForm.updateValueAndValidity();
    this.openModel(content);
  }

  selectedUserToDelete(user: User, content: string) {
    this.userSelected = user;
    this.openModel(content);
  }
  deleteUser() {
    this.loading = true;
    this.userService.deleteUser(this.userSelected.id).subscribe(({data}) => {
      this.loading = false;
      this.spinnerToast.showToastSuccess("", Consts.TitleSuccess);
      this.modalService.dismissAll();
    }, (err) => {
      this.loading = false;
      this.spinnerToast.showError("Error", err);
    })
  }
  onSubmitEditUser() {
     // stop here if form is invalid
    if (this.editStaffForm.invalid) {
      this.submitted = true;
      console.log(this.editStaffForm)
      return;
    }
    this.loading = true;
    const input: EditUserModel = {
      userId: this.userSelected.id,
      userName: this.editControls.username.value,
      roleName: this.editControls.role.value,
      phoneNumber: this.editControls.phoneNumber.value?.toString()
    }
    this.userService.editUser(input).subscribe(({data}) => {
      this.loading = false;
      this.spinnerToast.showToastSuccess("", Consts.TitleSuccess);
      this.modalService.dismissAll();
    }, (err) => {
      this.loading = false;
      this.spinnerToast.showError("Error", err);
    })
  }
  get editControls() { 
    if (!this.editStaffForm) {
      this.editStaffForm = this.formBuilder.group({});
    }
    return this.editStaffForm.controls; 
  }
  get f() { 
    if (!this.staffForm) {
      this.staffForm = this.formBuilder.group({});
    }
    return this.staffForm.controls; 
  }
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
  setValueRoleEditFormControl(roleName: string) {
    if (!!this.editListRole) {
      this.editListRole.forEach(element => {
        if (element.role == roleName) {
          element.isSelected = true;
        } else {
          element.isSelected = false;
        }
      });
    }
  }

  openModel(content:string) {
    this.submitted = false;
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onSubmitCreateUser(event: Event) {
    if (this.f.password.value !== this.f.password2.value) {
      this.f.password2.setErrors({pwdNotMatch:true})
      this.submitted = true;
      return;
    }
    // stop here if form is invalid
    if (this.staffForm.invalid) {
      this.submitted = true;
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
      this.staffForm.reset();
      this.setValueForRoleFormControl();
      this.spinnerToast.showToastSuccess("", Consts.TitleSuccess);
      this.modalService.dismissAll();
      this.submitted = false;
    }, (err) => {
      this.loading = false;
      this.spinnerToast.showError("Error", err);
    });
}
}
