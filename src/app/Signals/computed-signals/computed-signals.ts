import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.html',
  styleUrl: './computed-signals.css',
})
export class ComputedSignals {
  // --example-1---
  Count = signal<number>(3);
  doubleCount = computed<number>(() => this.Count() * 2);
  TripleCount = computed<number>(() => this.Count() * 3);
  increament() {
    this.Count.update((c) => c + 1);
  }
  reset() {
    this.Count.set(0);
  }

  // --example-2--
  firstName = signal<string>('Numaan');
  LastName = signal<string>('Kazi');
  fullname = this.firstName() + ' ' + this.LastName(); // --basic concatination
  FullName = computed<string>(() => `${this.firstName()} ${this.LastName()}`); // --using computed value

  // --example-3--
  values = signal<number[]>([10, 20, 30, 40, 50]);
// --using computed--
  total = computed<number>(() => {
    return this.values().reduce((curr, acc) => curr + acc, 0);
  });

  // using simple fucntion--
  Total = signal(0);
  totalValue() {
    this.Total.set(this.values().reduce((acc, curr) => acc + curr, 0));
  }
}
