import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      this.authService.signin(username, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        (errorMessage) => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    } else {
    }
    form.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
