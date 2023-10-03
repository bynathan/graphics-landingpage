import { Component } from '@angular/core';

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
}
