import { Component } from '@angular/core';
import { CustomPipe } from './Pipes/Custom-pipes/custom-pipe-pipe';
import { ConvertPipePipe } from './Pipes/Custom-pipes/convert-pipe-pipe';
import { CommonModule } from '@angular/common';
// import { SignalsBasic } from './Signals/signals-basic/signals-basic';
// import { ComputedSignals } from './Signals/computed-signals/computed-signals';
// import { Effect } from './Signals/effect/effect';
// import { PipesBasic } from './Pipes/pipes-built-in/pipes-basic';
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
  imports: [CustomPipe,ConvertPipePipe,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'Numaan Kazi';
  age = 22;
  isAdmin = true;
  // --
  username = 'Numaan';
  Age = 22;
  Height = 175.75;
  Weight = 66;

  // --custom-pipe--
  usd = 20;
  usdToinr = 10;
}
