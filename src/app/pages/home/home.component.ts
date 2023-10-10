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
    { name: 'Vander S.Abreu', image: '/assets/images/image-feedback1.png', profession: 'Cliente', feed: 'Projeto e profissionais excelentes!Engenheiro Flávio e equipe administrativa/financeira cumpriu todos os requisitos, com um bom custo/benefício.' },
    { name: 'Fernanda Stephane', image: '/assets/images/image-feedback2.png', profession: 'Cliente', feed: 'Atendimento de excelência, trabalho de qualidade, tiraram todas as minhas dúvidas, super indico minha experiência foi ótima.' },
    { name: 'Marceli Feliciano', image: '/assets/images/image-feedback3.png', profession: 'Cliente', feed: 'Melhor lugar pra colocar sua energia solar, eu aprovo e indico. 😎😉' },
    { name: 'Gaby Leono', image: '/assets/images/image-feedback4.png', profession: 'Cliente', feed: 'Empresa, comprometida. Entrega realmente aquilo que promete! Super indico!' },
  ]

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.startInterval();
    document.getElementsByTagName('body')[0].classList.remove('calculate-page');
  }

  ngAfterViewInit() {
    this.checkVisibility();
    this.renderer.listen('window', 'scroll', () => {
      this.checkVisibility();
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  addClassHover(){
      document.getElementById('sliders')?.classList.add('delayHover');
  };

  checkVisibility() {
    if (this.element && window.scrollY > 0) {
      const rect = this.element.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top + 10 < windowHeight) {
        this.renderer.addClass(this.element.nativeElement, 'animationCarousel');
        setTimeout(() => {
          this.addClassHover();
        }, 3000);
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
  }

  startInterval() {
    const listLength = this.feedbackList.length;
    setInterval(() => {
      this.indexFeedbackList = (this.indexFeedbackList + 1) % listLength;
    }, 8000);
  }
}
