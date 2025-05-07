import { Injectable } from '@nestjs/common';

@Injectable()
export class RecadosUtils {
  invertString(str: string): string {
    return str.split('').reverse().join('');
  }
}

@Injectable()
export class RecadosUtilsMock {
  invertString() {
    return 'bla bla bla';
  }
}
