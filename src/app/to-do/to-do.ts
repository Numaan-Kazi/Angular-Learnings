import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class TODO {
  TodoData = signal([{ data: '' }]);

  todoInput = '';

  addtodoData() {
    this.TodoData.update((items) => [...items, { data: this.todoInput }]);
    this.todoInput = '';
  }
}
