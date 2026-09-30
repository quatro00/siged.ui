import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.html',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormField],
})
export default class AuthSignIn {
  private router = inject(Router);
  protected signInFormModel = signal({ email: '', password: '' });
  protected signInForm = form(this.signInFormModel, (form) => {
    required(form.email, { message: 'Ingresa tu correo electrónico' });
    email(form.email, { message: 'Ingresa un correo electrónico válido' });
    required(form.password, { message: 'Ingresa tu contraseña' });
  });

  signIn(event: Event) {
    event.preventDefault();
    submit(this.signInForm, async () => {
      await this.router.navigateByUrl('/admin/inicio');
    });
  }
}
