import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fname'
})
export class FnamePipe implements PipeTransform {

  transform(_value: string, isRandomColor: boolean): string {
    if (isRandomColor) {
      const colors= ['btn-info', 'btn-orange', 'btn-success', 'btn-purple', 'btn-dark', 'btn-secondary', ' btn-primary'
        ,'btn-warning', 'btn-danger'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!!_value) {
      let arrayValue = _value.split(" ");
      if (arrayValue.length > 0 ) {
        const lastVlue = arrayValue[arrayValue.length - 1];
        return lastVlue.charAt(0);
      }
    }
    return possible.charAt(Math.floor(Math.random() * possible.length));
    
  }

}
