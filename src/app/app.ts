import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './signup/signup';
import { PropBinding } from './prop-binding/prop-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,SignUp,PropBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="Numaan"
  age=22
  isAdmin=true;
  // --
  username="Numaan"
  Age=22
  Height=175.75
  Weight=66
}
