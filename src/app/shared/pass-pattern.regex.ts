import { PasswordStrength, StrengthTypes } from "./pass.interface";

export const RegExpValidator: Record<string, RegExp> = {
    letters: RegExp(/^(?=.*[A-Za-z])/),
    digit: RegExp(/^(?=.*?[0-9])/),
    minLength: RegExp(/.{8,}/),
    specialChar: RegExp(/^(?=.*?[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/),
};

export const strengthPasswordCombinations: Record<
    PasswordStrength,
    RegExp[][]
> = {
    easy: [
        [RegExpValidator['letters'], RegExpValidator['minLength']],
        [RegExpValidator['digit'], RegExpValidator['minLength']],
        [RegExpValidator['specialChar'], RegExpValidator['minLength']],
    ],
    medium: [
        [
            RegExpValidator['minLength'],
            RegExpValidator['letters'],
            RegExpValidator['digit'],
        ],
        [
            RegExpValidator['minLength'],
            RegExpValidator['letters'],
            RegExpValidator['specialChar'],
        ],
        [
            RegExpValidator['minLength'],
            RegExpValidator['digit'],
            RegExpValidator['specialChar'],
        ],
    ],
    strong: [
        [
            RegExpValidator['minLength'],
            RegExpValidator['letters'],
            RegExpValidator['specialChar'],
            RegExpValidator['digit'],
        ],
    ],
};

export const progressStrengthConfig: Record<PasswordStrength, any> = {
    easy: { value: 33, type: StrengthTypes.danger },
    medium: { value: 66, type: StrengthTypes.warning },
    strong: { value: 100, type: StrengthTypes.success },
};