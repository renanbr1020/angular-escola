import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  @Input()
  peso = null;

  @Input()
  altura = null;

  resultado = null;
  classificacao = null;

  
  constructor() { }

  ngOnInit() {

    this.resultado =  this.peso/ (this.altura* this.altura);

    if (this.resultado <17){
      this.classificacao = "Muito abaixo do peso";
    }
    else if (this.resultado >= 17 && this.resultado<=18.49){
        this.classificacao = "Abaixo do peso";
      }
    else if (this.resultado >= 18.5 && this.resultado<=24.99){
        this.classificacao = "Peso normal";
      }
    else if (this.resultado >= 25 && this.resultado<=29.99 ){
        this.classificacao = "Acima do peso";
      }
    else if (this.resultado >= 30 && this.resultado<= 34.99){
        this.classificacao = "Obesidade I";
      }
    else if (this.resultado >= 35 && this.resultado<= 39.99){
        this.classificacao = "Obesidade II (severa)";
      }
    else if (this.resultado >= 40) {
            this.classificacao = "Obesidade III (mórbida)";
       }
   } 
}