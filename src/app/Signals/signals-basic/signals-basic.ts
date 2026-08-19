import { Component, signal } from '@angular/core';

interface UserInterface {
  name?: string;
  age?: number;
}

@Component({
  selector: 'app-signals-basic',
  imports: [],
  templateUrl: './signals-basic.html',
  styleUrl: './signals-basic.css',
})
export class SignalsBasic {
  count = signal(0);

  increament() {
    this.count.update((c) => c + 1);
  }
  decreament() {
    this.count.update((c) => c - 1);
  }
  reset() {
    this.count.set(0);
  }

  // --signals with data TYpes--
  counts = signal<number>(0);
  Name = signal<string>('Angular');
  Array = signal<number[]>([1, 2, 3, 4]);
  User = signal<UserInterface[]>([{ name: 'Numaan', age: 22 }]);

  // --set Intial Data--

  // --set replace whole data--
  updateNumbers() {
    this.Array.set([20, 30, 40, 50]);
  }
  // --Update Just add data--
  addNumbers() {
    this.Array.update((num) => [...num, 200, 400, 500, 100]);
  }

  updateUser() {
    this.User.set([{ name: 'NK', age: 22 }]);
  }
  addUsers() {
    this.User.update((user) => [
      ...user,
      { name: 'Username', age: 29 },
      { name: 'Firstname', age: 19 },
      { name: 'Middlename', age: 23 },
      { name: 'Lastname', age: 30 },
    ]);
  }
}
