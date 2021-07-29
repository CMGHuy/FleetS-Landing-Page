import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string[], strToReplace: string, replacementStr: string): string[] {
    if(!value || ! strToReplace || ! replacementStr)
    {
      return value;
    }
    let result = [] as string[]
    for (let str of value) {
      result.push(str.replace(new RegExp(strToReplace, 'g'), replacementStr))
    }
    return result;
    //return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
  }

}
