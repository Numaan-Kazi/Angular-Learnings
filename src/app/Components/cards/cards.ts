import { Component, input } from '@angular/core';
import { Buttons } from '../buttons/buttons';
import { FormFields } from '../form-fields/form-fields';

@Component({
  selector: 'app-cards',
  imports: [FormFields, Buttons],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  title = input<string>();
  description = input<string>();
  email = '';

  onSubmit(value: string) {
    this.email = value;
  }

  clicked1() {
    console.log('Button is pressed using method-1');
  }
  clicked2() {
    console.log('Button is pressed using method-2');
  }
}
