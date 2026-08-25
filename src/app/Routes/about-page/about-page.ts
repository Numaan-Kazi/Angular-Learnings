import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-page',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {}
