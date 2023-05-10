import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'afilter'
})
export class AfilterPipe implements PipeTransform {

  transform(products: any, type: string): any {
    if (type == 'All') 
    return products;

    return products.filter((x: any) => x.Category == type)
  }

}
