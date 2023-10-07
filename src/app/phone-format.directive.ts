import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneFormat]'
})
export class PhoneFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const formattedValue = this.formatPhoneNumber(value);
    input.value = formattedValue;
  }

  private formatPhoneNumber(value: string): string {
    if (value.length < 2) {
      return value;
    }

    let formattedValue = `(${value.substring(0, 2)}) `;
    
    if (value.length >= 3) {
      formattedValue += `${value[2]} `;
    }

    if (value.length >= 4) {
      formattedValue += `${value.substring(3, 7)}-`;
    }

    if (value.length >= 8) {
      formattedValue += value.substring(7, 11);
    }

    return formattedValue;
  }
}
