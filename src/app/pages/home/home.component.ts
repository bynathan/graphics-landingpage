import { Component, ElementRef, Renderer2, ViewChild, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('carousel') element?: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.checkVisibility();
    this.renderer.listen('window', 'scroll', () => {
      this.checkVisibility();
    });
  }

  addClassHover(){
      document.getElementById('sliders')?.classList.add('delayHover');
  };

  checkVisibility() {

    if (this.element) {
      const distanceFromTop = this.element.nativeElement.getBoundingClientRect().top + 10;
      const windowHeight = window.innerHeight;

      if (distanceFromTop < windowHeight && distanceFromTop > 0) {
        this.renderer.addClass(this.element?.nativeElement, 'animationCarousel');
        setTimeout(this.addClassHover, 3000)
      }
    }
  }
}
