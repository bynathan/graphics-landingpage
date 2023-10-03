import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public modalOpen:boolean = false;

  public modal(action:string){
    if(action == 'open'){
      this.modalOpen = true;
      document.getElementsByTagName('body')[0].classList.add('menu-open');
    }else if(action == 'close'){
      this.modalOpen = false;
      document.getElementsByTagName('body')[0].classList.remove('menu-open');
    }
  }
}
