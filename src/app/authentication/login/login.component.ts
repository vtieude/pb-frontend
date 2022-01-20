import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model';
import { AuthService } from 'src/app/services/auth.service';
import { Consts } from 'src/app/shared/consts';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService) {
      if (this.authenticationService.isAuthenticated()){
        this.router.navigate([Consts.HomePageNavigation]);
      }
     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(event: Event) {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.error = "";
      this.loading = true;
       this.authenticationService.login(this.f.username.value, this.f.password.value)
       .subscribe(({data}) => {
        localStorage.setItem('token', data?.login?.token || "");
        let userLogin = new User();
        userLogin.userName = data?.login?.userName || "";
        userLogin.role = data?.login?.role || "";
        userLogin.token = data?.login?.token;
        userLogin.id = data?.login?.id || 0;
        this.authenticationService.updateUserLoginInformation(userLogin)
        this.authenticationService.setUserLogin();
        this.router.navigate([Consts.HomePageNavigation]);
        this.loading = false;

       }, (error) => {
        this.error = error;
        this.loading = false;
        ;
       });
    //  this.authenticationService.getAllUsers().then((response) => {
    //    this.loading = true
    //  }, (reponseError) => {
    //  });
  }
}
