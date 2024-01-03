import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { PasswordStrength, StrengthTypes } from '../../pass.interface';
import { strengthPasswordCombinations, progressStrengthConfig } from '../../pass-pattern.regex';

@Component({
  selector: 'app-password-strength-bar',
  standalone: true,
  imports: [NgbProgressbarModule],
  template: `
      <ngb-progressbar class="mb-3" [type]="progressType" [value]="progressValue"/>
  `,
})
export class PasswordStrengthBarComponent implements OnInit, OnChanges {
  @Input() password!: string;
  progressValue: number = 0;
  progressType: string = StrengthTypes.dark;

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['password'] &&
      changes['password'].previousValue === changes['password'].currentValue &&
      !changes['password'].firstChange
    ) {
      this.validateAndCalculateStrength();
    } else {
      this.password && this.password.length > 0
        ? this.validateAndCalculateStrength()
        : this.reset();
    }
  }

  validateAndCalculateStrength(): void {
    let strength: PasswordStrength | undefined;
    for (const combinationName in strengthPasswordCombinations) {
      const combinationItems =
        strengthPasswordCombinations[combinationName as PasswordStrength];

      const validationResults = combinationItems.some((validations) => {
        return validations.every((value) => value.test(this.password));
      });

      if (validationResults) strength = combinationName as PasswordStrength;
    }

    if (!strength) return;

    const strengthConfiguration = progressStrengthConfig[strength];
    this.progressValue = strengthConfiguration.value;
    this.progressType = strengthConfiguration.type;
  }

  private reset(): void {
    this.progressValue = 0;
  }
}
