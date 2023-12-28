import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customCapitalize' })
export class CustomCapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const exceptions = ['dni', 's.a.']; // Add more exceptions as needed

    const words = value.split(' ');

    const capitalizedWords = words.map(word => {
      const lowerCaseWord = word.toLowerCase();
      if (exceptions.includes(lowerCaseWord)) {
        return lowerCaseWord.toUpperCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });

    return capitalizedWords.join(' ');
  }
}
