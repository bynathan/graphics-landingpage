import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit{
  ngOnInit(): void {
    document.getElementsByTagName('body')[0].classList.add('calculate-page');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
