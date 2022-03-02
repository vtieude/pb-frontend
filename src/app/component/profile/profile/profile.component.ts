import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/model';
import { UserService } from 'src/app/services/user-service/user-service.service';
import { Consts, TitleManagerProfile } from 'src/app/shared/consts';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { EditUserModel } from '__generated__/globalTypes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileTitle: TitleManagerProfile = new TitleManagerProfile;
  submitted = false;
  loading = false;
  profileForm!: FormGroup;
  listRole: any[];
  user!: User;
  isEditProfile = false;
  constructor(private formBuilder: FormBuilder,
    private helper: HelperService,
    private spinnerToast: SpinnerService,
    private userService: UserService, ) { 
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
    this.listRole = this.helper.userInformation?.ListRoleByUserLogin;

    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
      password2: [''],
      role: [this.setValueForRoleFormControl(), Validators.required],
      email: ['', Validators.required],
      phoneNumber:['']
    });
    this.setStatusFormControl(false);
    this.loadUserData();
  }

  loadUserData() {
    this.userService.getProfile().subscribe(({data}): void => {
      this.user = data.GetProfile as unknown as User;
      this.setUserProfileData();
    }, 
    () => {
    });
  }

  clickEditProfile() {
    this.isEditProfile = true;
    this.f.username.enable();
    this.f.password.enable();
    this.f.password2.enable();
    this.f.phoneNumber.enable();
  }

  setUserProfileData() {
    this.f.username.setValue(this.user.Username);
    this.f.email.setValue(this.user.Email);
    this.f.phoneNumber.setValue(this.user.PhoneNumber);
    this.setValueForRoleFormControl();
  }
  

  setStatusFormControl(isEnable : boolean) {
    Object.keys(this.profileForm.controls).forEach(element => {
      if (isEnable){
        this.profileForm.controls[element].enable();
      } else {
        this.profileForm.controls[element].disable();
      }
    })
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

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  onSubmitEditProfile(event: Event) {
    if (this.f.password.value !== this.f.password2.value) {
      this.f.password2.setErrors({pwdNotMatch:true})
      this.submitted = true;
      return;
    }
    this.submitted = true;
    this.loading = true;
    const input: EditUserModel = {
      userId: this.user.id,
      userName: this.f.username.value,
      roleName: "",
      phoneNumber: this.f.phoneNumber.value?.toString(),
      password: this.f.password.value
    }
    this.userService.editProfile(input).subscribe(({data}) => {
      this.loading = false;
      this.spinnerToast.showToastSuccess("", Consts.TitleSuccess);
      this.submitted = false;
      this.isEditProfile = false;
    }, (err) => {
      this.loading = false;
      this.spinnerToast.showError("Error", err);
      this.submitted = false;
      this.isEditProfile = false;
    })
    this.setStatusFormControl(false);
  }

  get f() { 
    if (!this.profileForm) {
      this.profileForm = this.formBuilder.group({});
    }
    return this.profileForm.controls; 
  }

}
