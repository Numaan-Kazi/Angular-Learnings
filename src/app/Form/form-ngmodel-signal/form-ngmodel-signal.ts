import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
// using old method [ngModel]
// import { FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-ngmodel-signal',
  // using old method [ngModel]
  // imports: [FormsModule],

  // using signal and new method
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-ngmodel-signal.html',
  styleUrl: './form-ngmodel-signal.css',
})
export class FormNgmodelSignal {
  // using old method [ngModel]
  name = signal('');
  email = signal('');
  handleSubmit() {
    console.log(`Name:${this.name()}, Email:${this.email()} `);
  }

  // using new method [signal]
  userSignal = signal({ name: '', email: '' });
  form: any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
    });
    this.form.valueChanges.subscribe((value: any) => {
      this.userSignal.set(value);
    });
  }

  submitForm(){
    console.log(`Name: ${this.userSignal().name}, Email: ${this.userSignal().email}`)
  }
}
