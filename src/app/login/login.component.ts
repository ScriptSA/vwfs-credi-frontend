import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';
import { SysMsgrComponent } from '../shared/sys-msgr/sys-msgr.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true; //password visibility

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private snackbar: SysMsgrComponent)
    {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Call the AuthService's login method
      const loggedIn = this.authService.login(username, password);

      if (loggedIn) {
        //successful login
        this.snackbar.openSnackbar('Ingresaste', 5000);
        this.route.navigate(['/main-frame']);

      } else {
        //bad login
        this.snackbar.openSnackbar('revisa el user y la pass :(', 5000);
      }
    }
  }
}
