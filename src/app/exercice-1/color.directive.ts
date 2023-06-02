import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:keydown', ['$event']) handleKeyboardEvent($event) {
    if ($event.key == 'ArrowUp') {
      this.colorier('red');
    } else if ($event.key == 'ArrowDown') {
      this.colorier('green');
    } else if ($event.key == 'ArrowRight') {
      this.colorier('blue');
    } else if ($event.key == 'ArrowLeft') {
      this.colorier('orange');
    }
    console.log($event);
  }

  private colorier(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
