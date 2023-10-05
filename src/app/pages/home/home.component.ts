import { Component, ElementRef, Renderer2, ViewChild, HostListener, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{
  @ViewChild('carousel') element?: ElementRef;

  public indexStepsList: number = 0;
  public indexFeedbackList: number = 0;

  public stepsList = [
    { number: '1', title: 'Painel Solar', text: 'Figma ipsum component variant main layer. Vertical arrow shadow selection group flows asset. Duplicate comment thumbnail prototype vector.' },
    { number: '2', title: 'Inversor Solar', text: 'Figma ipsum component variant main layer. Vertical arrow shadow selection group flows asset. Duplicate comment thumbnail prototype vector.' },
    { number: '3', title: 'Distribuição', text: 'Figma ipsum component variant main layer. Vertical arrow shadow selection group flows asset. Duplicate comment thumbnail prototype vector.' },
    { number: '4', title: 'O uso', text: 'Figma ipsum component variant main layer. Vertical arrow shadow selection group flows asset. Duplicate comment thumbnail prototype vector.' },
    { number: '5', title: 'Excesso de produção', text: 'Figma ipsum component variant main layer. Vertical arrow shadow selection group flows asset. Duplicate comment thumbnail prototype vector.' },
  ]

  public feedbackList = [
    { name: 'Juliana Silva', profession: 'Arquiteta', feed: 'Figma ipsum component variant main layer. Scrolling rotate plugin device union bullet italic. Group scale opacity rectangle style italic. Flatten flows rectangle stroke opacity pixel vector. Shadow community comment list scale bold stroke bullet. Edit component layout select star list frame auto layout text.' },
    { name: '2', profession: 'aaa', feed: '1' },
    { name: '3', profession: 'bbb', feed: '2' },
    { name: '4', profession: 'b', feed: '3' },
  ]

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

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
      if (windowHeight > distanceFromTop + 10) {
        this.renderer.addClass(this.element?.nativeElement, 'animationCarousel');
        setTimeout(this.addClassHover, 3000)
      }
    }
  }

  nextStep(){
    if(this.indexStepsList < 4){
      this.indexStepsList++;
    }else if (this.indexStepsList == 4){
      this.indexStepsList = 0;
    }
  }

  backStep(){
    if(this.indexStepsList > 0){
      this.indexStepsList--;
    }else if(this.indexStepsList == 0){
      this.indexStepsList = 4;
    }
  }

  feedbackPosition(position: number){
    this.indexFeedbackList = position;
    console.log(this.indexFeedbackList)
  }
}
