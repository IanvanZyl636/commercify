export enum PasswordStrengthRegex {
  lowerCaseCharacters = "(?=(.*[a-z]){1,})",
  upperCaseCharacters = "(?=(.*[A-Z]){1,})",
  numberCharacters = "(?=(.*[0-9]){2,})",
  specialCharacters = "(?=.*[#$@!%&*?])",
  limitAmountCharacter = "^.{8,}$",
}
