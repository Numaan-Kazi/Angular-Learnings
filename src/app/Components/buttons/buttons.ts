import { Component, input, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {
  label = input<string>();
  // --two way too make it button clickable--
  clicked = output<void>(); //1
  @Output() buttonClick = new EventEmitter<void>(); //2
  handleClick() {
    this.buttonClick.emit();
  }
}
