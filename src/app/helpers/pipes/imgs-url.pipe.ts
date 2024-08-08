import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgsUrl',
  standalone: true
})
export class ImgsUrlPipe implements PipeTransform {

  transform(value: string| null ): string | null {
    if(!value) return null
    return `https://icherniakov.ru/yt-course/${value}`;
  }

}
