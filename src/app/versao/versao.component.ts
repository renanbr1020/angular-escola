import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-versao',
  templateUrl: './versao.component.html',
  styleUrls: ['./versao.component.css']
})
export class VersaoComponent implements OnInit {
  @Input()
  maior = null;

  @Input()
  funcionalidade = null;

  @Input()
  menor = null;

  teste = null;

  versao_completa =null;


  constructor() { }

  ngOnInit() {
    if (this.maior>=1 && this.maior<=10 && 
      this.funcionalidade>=0 && this.funcionalidade<=10 && 
      this.menor<=0 && this.menor>=100){
      this.versao_completa = this.maior + "." + this.funcionalidade + "." + this.menor;
      this.teste = 0;

    }else{
      this.teste = false;
    }

  }

}
