import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {
    document.getElementsByTagName('body')[0].classList.add('calculate-page');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  ngAfterViewInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  public value: string = 'R$0,00';
  public valueFiltred: number = 0;


  public name:string = '';
  public email:string = '';
  public phone:string = '';

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
    'Angra dos Reis',
    'Araruama',
    'Barra Mansa',
    'Belford Roxo',
    'Cabo Frio',
    'Cachoeiras de Macacu',
    'Campos dos Goytacazes',
    'Duque de Caxias',
    'Itaboraí',
    'Itaguaí',
    'Macaé',
    'Magé',
    'Maricá',
    'Mesquita',
    'Nilópolis',
    'Niterói',
    'Nova Friburgo',
    'Nova Iguaçu',
    'Paracambi',
    'Petrópolis',
    'Queimados',
    'Resende',
    'São Gonçalo',
    'São João de Meriti',
    'Teresópolis',
    'Volta Redonda',
  ];

  public buttonText = 'Calculando';

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async animateButtonText() {
    setTimeout(() => {
      this.steps = 3;
    }, 5000);

    const valueClear = this.value.substring(0, this.value.length - 2);
    const newValue = valueClear.replace(/R|\$|\.|,/g, '');
    this.valueFiltred = parseFloat(newValue);
    this.monthlyExpense = this.valueFiltred;

    if (!isNaN(this.valueFiltred)) {
      let multiplicador = 35.80;
      if (this.valueFiltred > 3232) {
          multiplicador = 32.00;
      }
      const valorMedio = this.valueFiltred * multiplicador;
      const valorMinimo = valorMedio - (valorMedio * 0.10);
      const valorMaximo = valorMinimo + (valorMinimo * 0.15);

      const valorMinimoFormatado = valorMinimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const valorMaximoFormatado = valorMaximo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

      this.investmentMin = valorMinimoFormatado;
      this.investmentMax = valorMaximoFormatado;
    } else {
      this.investmentMin = '-';
      this.investmentMax = '-';
    }
    
    while (true) {
      this.buttonText = 'Calculando';
      await this.delay(500);
      this.buttonText = 'Calculando.';
      await this.delay(500);
      this.buttonText = 'Calculando..';
      await this.delay(500);
      this.buttonText = 'Calculando...';
      await this.delay(500);
    }

  }

  public steps:number = 0;

  /*Dados Armazenados*/

  public installationType = this.typesCtrl.value; /*Tipo de Instalação*/
  public county = this.munisCtrl.value; /*Municipio*/
  public monthlyExpense:number = 0; /*Gasto mensal*/

  public nameValue:string = ''; /*Nome*/
  public emailValue:string = ''; /*E-mail*/
  public phoneValue:string = ''; /*Telefone*/

  public investmentMin:string = ''; /*Investimento minimo*/
  public investmentMax:string = ''; /*Investimento maximo*/

  public nextSteps(step:number){
    if(step == 1){
      this.steps = step;
      this.installationType = this.typesCtrl.value;
      this.county = this.munisCtrl.value;
    }
    else if(step == 2){
      this.nameValue = this.name;
      this.emailValue = this.email;
      this.phoneValue = this.phone;
      this.steps = step;
      this.animateButtonText();
    }
  }
}
