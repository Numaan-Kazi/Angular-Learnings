import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {
  ARRAY1 = ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACTJS', 'ANGULAR'];
  ARRAY2 = [
    { name: 'Numaan', age: 22 },
    { name: 'Abc', age: 22 },
    { name: 'Dfe', age: 23 },
    { name: 'Rahul', age: 25 },
    { name: 'Amit', age: 21 },
    { name: 'John', age: 24 },
  ];

  ARRAY3 = ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACTJS', 'ANGULAR'];

  handleDelete(index: number) {
    this.ARRAY3.splice(index, 1);
  }

  Numbers=[10,20,15,30,25]
}
