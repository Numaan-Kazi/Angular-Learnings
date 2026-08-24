import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-property-binding',
  imports: [],
  templateUrl: './signals-property-binding.html',
  styleUrl: './signals-property-binding.css',
})
export class SignalsPropertyBinding {
  Login = signal(false);
  Logout = signal(true);
  role = signal<'user' | 'admin'>('user');
  Features = signal<string[]>([]);

  setLogin() {
    this.Login.set(true);
  }
  setLogout() {
    this.Logout.set(false);
    this.Login.set(false);
  }

  setUser() {
    this.role.set('user');
    if (this.role() == 'user') this.Features.set(['Dashboard', 'Setting', 'Profile']);
  }
  setAdmin() {
    this.role.set('admin');

    if (this.role() == 'admin')
      this.Features.set(['Dashboard', 'Setting', 'Profile', 'Payment Details', 'User Data']);
  }
}
