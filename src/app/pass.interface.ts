export interface PassStatus {
    status: PasswordStrength;
    value: number;
    color: StrengthTypes;
}

export enum StrengthTypes {
    success = 'success',
    danger = 'danger',
    warning = 'warning',
    dark = 'dark',
}

export enum PasswordStrength {
    easy = 'easy',
    medium = 'medium',
    strong = 'strong',
}