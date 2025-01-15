import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),  // Define o estado inicial (transparente)
        animate('500ms 0s', style({ opacity: 1 }))  // A animação para aparecer
      ]),
      transition(':leave', [
        animate('500ms 0s', style({ opacity: 0 }))  // A animação para desaparecer
      ])
    ])
  ]


})
export class AppComponent {
  title = 'Shiii';
}
