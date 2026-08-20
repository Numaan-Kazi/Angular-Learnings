import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomPipe',
})
export class CustomPipe implements PipeTransform {
  transform(fullName: string): string {
    const parts = fullName.split(" ");
    // console.log(parts.length, 'parts');

    if (parts?.length < 2) return fullName;

    const first = parts[0].charAt(0).toUpperCase();
    // console.log(first, '<-first');
    const Last = parts[1];
    // console.log(Last, '<-Last');

    return `${first}. ${Last}`;
  }
}
