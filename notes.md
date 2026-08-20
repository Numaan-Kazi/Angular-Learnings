--this Keyword in a Class:
In a class, if we want to call one method from another method, we use the this keyword.
We also use this to access or modify class properties (variables).

exa:
export class ClickEvent {
Clickme() {
console.log("You Click me!");
this.YouClickMe();
}

YouClickMe() {
console.log("Hey there, I'm a click me!");
}
}

---

In Angular @for:

$index      → current index
$first → first item
$last       → last item
$even → even index
$odd → odd index

---

Signal

-Angular Signals

Definition : Signal is a reactive value container in Angular that stores a value and automatically notifies Angular when that value changes, so the UI can update.

Think of it as: Signal = reactive variable

1. Create a Signal

import { Component, signal } from '@angular/core';

@Component({
selector: 'app-counter',
templateUrl: './counter.html'
})
export class CounterComponent {

count = signal(0);

increment() {
this.count.update(value => value + 1);
}

reset() {
this.count.set(0);
}
}

Three Principle of signals are:
1.Fine grained reactivity
2.Signal Graph
3.Avoid over-rendering

---

-Why use pipes?
Because they keep your HTML clean and readable, especially when formatting becomes more complex.

Definition:
Built-in pipes are predefined pipes provided by Angular that help us transform or format data directly in the HTML template.

| Pipe        | Use                          | Example                            |
| ----------- | ---------------------------- | ---------------------------------- |
| `uppercase` | Converts text to uppercase   | `{{ name \| uppercase }}`          |
| `lowercase` | Converts text to lowercase   | `{{ name \| lowercase }}`          |
| `currency`  | Formats a number as currency | `{{ price \| currency:'INR' }}`    |
| `date`      | Formats a date               | `{{ today \| date:'dd/MM/yyyy' }}` |
| `number`    | Formats a number             | `{{ price \| number:'1.2-2' }}`    |
