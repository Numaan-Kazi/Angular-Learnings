import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-basic-project',
  imports: [],
  templateUrl: './counter-basic-project.html',
  styleUrl: './counter-basic-project.css',
})
export class CounterBasicProject {
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
}
