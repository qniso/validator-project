import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputCardComponent } from './components/input-card/input-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputCardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'validator-project';
}
