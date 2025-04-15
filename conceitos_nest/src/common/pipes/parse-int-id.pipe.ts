import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== 'param' || metadata.data === 'id') {
    }
    console.log('PIPE value: ', value);
    console.log('PIPE metadata: ', metadata);
  }
}
