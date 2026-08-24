import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  count = 0;
  increament() {
    this.count++;
  }
  // with signals
  countS =signal(0);
  increamentUsingSignal() {
    this.countS.update((c:any)=>c+1);
  }

  showEvent(e: any) {
    console.log(e, 'Event');
  }

  userName = '';
  updateUser(value: any) {
    this.userName = value;
  }
}
