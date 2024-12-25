import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../user.service';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class RegisterComponent implements OnDestroy {
  UserForm: FormGroup;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    // Initialize the form with validation
    this.UserForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [
          '',
          [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
        ],
        gender: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  }

  ngOnInit() {
    window.scroll(0, 0)
  }

  // Method to register the user
  registerUser() {
    if (this.UserForm.valid) {
      const user = {
        firstName: this.UserForm.get('firstName')?.value,
        lastName: this.UserForm.get('lastName')?.value,
        phone: this.UserForm.get('phone')?.value,
        email: this.UserForm.get('email')?.value,
        password: this.UserForm.get('password')?.value,
        gender: this.UserForm.get('gender')?.value,
      };
  
      this.userService
        .registerAsSeller(user)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          (res: any) => {
            if (res.message) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: res.message,
                showConfirmButton: false,
                timer: 2000,
              });
              this.router.navigate(['/']);
            } else {
              Swal.fire({
                icon: 'error',
                text: 'Unexpected response from the server',
                showConfirmButton: false,
                timer: 2000,
              });
            }
          },
          (err) => {
            console.error('Registration failed:', err);
  
            // Enhanced error messaging
            const errorMessage =
              err.error?.message || 'Oops! Something went wrong on the server.';
            Swal.fire({
              icon: 'error',
              text: errorMessage,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        );
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Invalid Form - Please check your input and try again.',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
  

  // Clean up subscriptions
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
