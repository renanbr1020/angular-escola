import { Component } from '@angular/core';
import {Disciplina} from './disciplina.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  selecionado = null;

  disciplinas = [
    new Disciplina ('001','Língua Portuguesa','Nome/Professor/Descrição','Raquel','Pelo menos a nossa língua devemos saber!'),
    new Disciplina ('002','Matemática','Nome/Professor/Descrição','Cida','Com isso dar pra fazer uns cálculos bacana!'),
    new Disciplina ('003','Educação Física','Nome/Professor/Descrição','Fodão','Pra suar e voltar para a sala fedendo!'),
  ];

  selecionar (disciplina){
    this.selecionado = disciplina;
  }

}
