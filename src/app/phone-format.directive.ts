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

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = this.el.nativeElement as HTMLInputElement;
    const key = event.key;

    if (key === 'Backspace') {
      // Permite apagar caracteres
      return;
    }

    if (!this.isNumeric(key)) {
      // Impede a entrada de caracteres não numéricos
      event.preventDefault();
    }
  }

  private isNumeric(key: string): boolean {
    return /^\d+$/.test(key);
  }

  private formatPhoneNumber(value: string): string {
    if (value.length <= 2) {
      return value;
    }

    let formattedValue = `(${value.substring(0, 2)})`;

    if (value.length > 2) {
      formattedValue += ` ${value.substring(2, 3)}`;
    }

    if (value.length > 3) {
      formattedValue += ` ${value.substring(3, 7)}`;
    }

    if (value.length > 7) {
      formattedValue += `-${value.substring(7, 11)}`;
    }

    return formattedValue;
  }
}
