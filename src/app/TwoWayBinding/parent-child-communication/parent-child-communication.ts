import { Component, signal } from '@angular/core';
// import { Component, EventEmitter, input, Output } from '@angular/core'; //old way

@Component({
  selector: 'parent-child-communication',
  // == Child to Parent ==

  // imports: [ Output],
  templateUrl: './parent-child-communication.html',
  styleUrl: './parent-child-communication.css',
})
export class ParentChildCommunication {
  // 1.old method--

  // ==Parent to Child==
  // name = input<string>();

  // == Child to Parent ==
  // @Output() notify = new EventEmitter<string>();

  // sendToParent() {
  //   this.notify.emit('Hello User');
  // }

  // 1.New method--
  message = signal('Hello Parent !!!');
  updateChild() {
    this.message.set('Child Data Updated Successfully!');
  }
}
