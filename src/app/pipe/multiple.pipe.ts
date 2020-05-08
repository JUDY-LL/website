import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(style): any {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }

}
