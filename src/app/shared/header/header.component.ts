import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuOpen:boolean = false;

  public modal(action:string){
    if(action == 'open'){
      this.menuOpen = true;
      document.getElementsByTagName('body')[0].classList.add('menu-open');
    }else if(action == 'close'){
      this.menuOpen = false;
      document.getElementsByTagName('body')[0].classList.remove('menu-open');
    }
  }

  isHeaderVisible = true;
  prevScrollPos = window.pageYOffset;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentScrollPos = window.pageYOffset;

    if(currentScrollPos < 675){
      this.isHeaderVisible = true;
    }

    if(currentScrollPos > 675){
      if (this.prevScrollPos < currentScrollPos) {
        this.isHeaderVisible = true;
      } else if(this.prevScrollPos > currentScrollPos) {
        this.isHeaderVisible = false;
      }
    }

    this.prevScrollPos = currentScrollPos;
  }
}
