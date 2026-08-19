import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-basic',
  imports: [CommonModule],
  templateUrl: './pipes-basic.html',
  styleUrl: './pipes-basic.css',
})
export class PipesBasic {
  userName = 'NUMAAN';
  systemName = 'Linux';
  date = new Date();
  currency = 2000;
  per = '0.99';
  user = { name: 'Numaan', Role: 'Fronend Engineer' };
}
