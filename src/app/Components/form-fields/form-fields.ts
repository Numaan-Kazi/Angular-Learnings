import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-form-fields',
  imports: [],
  templateUrl: './form-fields.html',
  styleUrl: './form-fields.css',
})
export class FormFields {
  label = input<string>();
  value = input<string>();
  type = input<string>('text');
  class = input<string>();

  // --get its value in console--
  valueChange = output<string>();
  onChange(value: string) {
    this.valueChange.emit(value);
  }
}
