import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-to-do',
  imports: [CommonModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class TODO {
  date = new Date();
  Time = signal(new Date());
  todoInput = '';
  TodoData = signal<{ data: string }[]>([]);
  isChecked = signal<boolean[]>([]);

  constructor() {
    setInterval(() => {
      this.Time.set(new Date());
    }, 1000);
  }

  addtodoData() {
    if (!this.todoInput.length) return;
    this.TodoData.update((items) => [...items, { data: this.todoInput }]);
    this.todoInput = '';
  }

  handleDelete(indexParams: number) {
    this.TodoData.update((items) => items.filter((_, index) => index !== indexParams));
  }
  
  handleisChecked(index: number) {
    this.isChecked.update((items) => {
      const updated = [...items];
      updated[index] = !updated[index];
      return updated;
    });
  }
}
