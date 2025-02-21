import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUri'
})
export class ConvertToUriPipe implements PipeTransform {

  transform(value: string="test"): string {
    let text    
    return value.toLowerCase().trim().replace(/[\s:!@#$%^&*()_+={}[\]<>?/.,;'"|\\]/g,'-');
  } 

}
