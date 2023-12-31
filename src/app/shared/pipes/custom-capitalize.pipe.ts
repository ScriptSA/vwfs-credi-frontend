import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customCapitalize' })
export class CustomCapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const allCaps = ['dni', 's.a.', 'd.n.i.']; // Add more exceptions as needed
    const noCaps = ['de', 'la', 'y', 'por']; // Add more exceptions as needed
    const words = value.split(' ');

    const capitalizedWords = words.map(word => {
      const lowerCaseWord = word.toLowerCase();
      if (allCaps.includes(lowerCaseWord)) {
        return lowerCaseWord.toUpperCase();
      } if (noCaps.includes(lowerCaseWord)) {
        return lowerCaseWord.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });

    return capitalizedWords.join(' ');
  }
}
