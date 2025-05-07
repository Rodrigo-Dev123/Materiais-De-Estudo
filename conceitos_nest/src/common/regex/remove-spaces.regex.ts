import { RegexProtocal } from './regex.protocol';

export class RemoveSpacesRegex extends RegexProtocal {
  execute(string: string): string {
    return string.replace(/\s+/g, '');
  }
}
