import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }
  ngOnInit() {
    window.scroll(0, 0)
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Function to handle login
  loginUser() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.userService.loginUser(this.loginForm.value).subscribe(
        (res: any) => {
          this.loading = false;
          if (res.userExist && res.correctPassword) {
            Swal.fire({
              icon: 'success',
              text: 'Login Successful!',
              showConfirmButton: false,
              timer: 2000,
            });
            sessionStorage.setItem('userId', res.user_id);
            if (sessionStorage.getItem('userId')) {
              setInterval(() => {
                this.router.navigate(['/']);
                window.location.reload()
              }, 2000)
            }
          } else {
            Swal.fire({
              icon: 'error',
              text: res.message,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        },
        (err) => {
          this.loading = false;
          Swal.fire({
            icon: 'error',
            text: 'Oops! Something went wrong',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Invalid Form',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
}
