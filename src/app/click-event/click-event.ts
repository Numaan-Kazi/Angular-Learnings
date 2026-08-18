import { Component } from '@angular/core';

@Component({
  selector: 'app-click-event',
  imports: [],
  templateUrl: './click-event.html',
  styleUrl: './click-event.css',
})
export class ClickEvent {
  Clickme() {
    console.log('You Click me !');
    this.YouClickMe();
  }
  YouClickMe() {
    console.log('Hey There im a click me!');
  }

  // --
  HandleSubmit() {
    console.log('You click me !!');
  }

  onTyping(e: any) {
    console.log(e.target.value);
  }

  onKeyUp(e: any) {
    console.log('Key Up event', e.key);
  }

  MouseHover() {
    console.log('Mouse Hover');
  }

  MouseLeave() {
    console.log('Mouse Leave');
  }
  onBlur() {
    console.log('On Blur');
  }
  onFocus() {
    console.log('On Focus');
  }
}
