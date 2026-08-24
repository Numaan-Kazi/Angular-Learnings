import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-flow',
  imports: [],
  templateUrl: './if-else-flow.html',
  styleUrl: './if-else-flow.css',
})
export class IfElseFlow {
  isLogin = false;

  showButton = false;

  switchButton() {
    this.showButton = !this.showButton;
  }

  age = 0;

  checkAge(value: any) {
    this.age = value;
  }
}
