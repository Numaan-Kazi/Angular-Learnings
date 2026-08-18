import { Component, signal } from '@angular/core';
import { CounterBasicProject } from './counter-basic-project/counter-basic-project';

@Component({
  selector: 'app-root',
  imports: [CounterBasicProject],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'Numaan';
  age = 22;
  isAdmin = true;
  // --
  username = 'Numaan';
  Age = 22;
  Height = 175.75;
  Weight = 66;
}
