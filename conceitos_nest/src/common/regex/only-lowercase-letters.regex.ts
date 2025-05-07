import { RegexProtocal } from './regex.protocol';

export class OnlyLowercaseLettersRegex extends RegexProtocal {
  execute(string: string): string {
    return string.replace(/[^a-z]/g, '');
  }
}
