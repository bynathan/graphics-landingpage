import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isVisible = false;

  public backToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 350;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
