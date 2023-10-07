import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmailFormat]'
})
export class EmailFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    let value = input.value.trim();
    input.value = value.toLowerCase();
  }
}
