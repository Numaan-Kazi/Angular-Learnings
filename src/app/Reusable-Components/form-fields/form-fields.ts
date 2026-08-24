import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-fields',
  imports: [],
  templateUrl: './form-fields.html',
  styleUrl: './form-fields.css',
})
export class FormFields {
  label=input<string>();
  value=input<string>();
  type=input<string>();
}
