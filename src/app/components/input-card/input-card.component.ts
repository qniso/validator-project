import { Component } from '@angular/core';

import { PasswordStrengthBarComponent } from '../password-strength-bar/password-strength-bar.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input-card',
  standalone: true,
  imports: [PasswordStrengthBarComponent, FormsModule],
  templateUrl: './input-card.component.html',
  styleUrl: './input-card.component.scss'
})
export class InputCardComponent {
  passwordModel: string = '';
}
