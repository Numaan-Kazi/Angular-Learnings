import { Component, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  // old method of binding using formmodule
  // imports: [FormsModule],

  // new method of binding using formmodule
  imports: [],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  // old method
  userName = 'Numaan';

  // new mothod
  User = signal({ name: 'Numaan', age: 22 });

  updateUserName(value: any) {
    this.User.update((user) => ({ ...user, name: value }));
  }
  updateUserAge() {
    this.User.update((user) => ({ ...user, age: user.age + 1 }));
  }
}
