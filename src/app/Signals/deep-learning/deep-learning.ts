import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-deep-learning',
  imports: [CommonModule],
  templateUrl: './deep-learning.html',
  styleUrl: './deep-learning.css',
})
export class DeepLearning {
  // Fine Grained Reactivity
  count = signal(0);
  name = signal('Angular Learnings');
  increament() {
    this.count.update((c) => c + 1);
  }
  // Fine Grained Reactivity
  COUNT = signal(2);
  DOUBLE = computed(() => this.COUNT() * 2);

  constructor() {
    effect(() => {
      console.log('Double Count is :', this.COUNT());
    });
  }
  increament2() {
    this.COUNT.update((c) => c + 1);
  }

  // Avoid over-rendering
  value = signal(2);
  price = signal(5);
  Total = computed(() => this.value() * this.price());

   updateValue() {
    this.value.update((c) => c + 1);
  }
   updatePrice() {
    this.price.update((c) => c + 1);
  }
}
