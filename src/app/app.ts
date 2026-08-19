import { Component, signal } from '@angular/core';
// import { SignalsBasic } from './Signals/signals-basic/signals-basic';
import { ComputedSignals } from './Signals/computed-signals/computed-signals';
// import { RouterOutlet } from '@angular/router';
// import { Login } from './login/login';
// import { SignUp } from './signup/signup';
// import { PropBinding } from './prop-binding/prop-binding';
// import { EventBinding } from './event-binding/event-binding';
// import { ClickEvent } from './click-event/click-event';
// import { CounterBasicProject } from './counter-basic-project/counter-basic-project';
// import { GetSetValue } from './get-set-value/get-set-value';
// import { IfElseFlow } from './if-else-flow/if-else-flow';
// import { ForLoop } from './for-loop/for-loop';

@Component({
  selector: 'app-root',
  imports: [ComputedSignals],
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
