import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

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
      this.loading = true;
       this.authenticationService.login(this.f.username.value, this.f.password.value)
       .subscribe(({data}) => {
        localStorage.setItem('currentUser', JSON.stringify({ username: data?.login?.username, role: data?.login?.role, token: data?.login.token }));
        this.authenticationService.isLogin = true;
        this.router.navigate(['/dashboard']);
       }, (error) => {
        this.error = error;
        ;
       });
    //  this.authenticationService.getAllUsers().then((response) => {
    //    this.loading = true
    //  }, (reponseError) => {
    //  });
      this.loading = false;
  }
}
