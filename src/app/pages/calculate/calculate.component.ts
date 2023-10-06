import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

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

  typesCtrl = new FormControl('');

  typeForm = new FormGroup({
    type: this.typesCtrl
  });

  types = [
    'Residencial',
    'Empresarial',
    'Industrial',
  ];

  munisCtrl = new FormControl('');

  muniForm = new FormGroup({
    muni: this.munisCtrl
  });

  munis = [
    'Rio de Janeiro',
    'São Gonçalo',
    'Duque de Caxias',
    'Nova Iguaçu', 
    'Niterói', 
    'Belford Roxo', 
    'São João de Meriti', 
    'Campos dos Goytacazes', 
    'Petrópolis', 
    'Volta Redonda', 
    'Magé', 
    'Itaboraí', 
    'Angra dos Reis', 
    'Macaé', 
    'Teresópolis', 
    'Cabo Frio', 
    'Nova Friburgo', 
    'Mesquita', 
    'Barra Mansa', 
    'Nilópolis'
  ];
}
