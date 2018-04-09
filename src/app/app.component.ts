import {Component} from '@angular/core';
import {Ocorrencia} from './ocorrencia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editando = null;

  matricula = null;
  nome = null;
  data = null;
  responsavel = null;
  observacao = null;
  tipo = null;
  
  salvar_ok = false;
  ocorrencias = [
    new Ocorrencia('001','Pedro', new Date(4-4-2018)),
    new Ocorrencia('002','Maria', new Date()),
    new Ocorrencia('003','Marcos', new Date()),
    new Ocorrencia('004','Matheus', new Date()),
    new Ocorrencia('005','João Alberto',new Date(),'Comportamento inadequado com colegas'),
    new Ocorrencia('006','Maria Clara',new Date(),'Baixo índice de rendimento'),
    new Ocorrencia('007','Ismael',new Date(),'Indisciplina em sala de aula'),
    
  ];

  constructor(){
    this.invocar_cache();
  }
 

  salvar() {
    if (this.editando) {
      this.editando.matricula = this.matricula;
      this.editando.nome = this.nome;
      this.editando.data = this.data;
      this.editando.responsavel = this.responsavel;
      this.editando.observacao = this.observacao;
      this.editando.tipo = this.tipo;
    

      this.armazenar_cache(this.editando);

    } else {
      const o = new Ocorrencia(this.matricula, this.nome, this.data,this.responsavel,this.observacao,this.tipo);
      this.ocorrencias.push(o);

      this.armazenar_cache(o);
 
      this.salvar_ok = true;
    }
    this.matricula = null;
    this.nome = null;
    this.data = null;
    this.responsavel= null;    
    this.observacao = null;
    this.tipo = null;

    this.editando = null;
  }


  armazenar_cache(disciplina){
    localStorage.setItem((disciplina.matricula).toString(), JSON.stringify(disciplina));
  }

  invocar_cache(){
      for(const i in localStorage){
          const e = JSON.parse(localStorage.getItem(i));
          if(e != undefined){
              this.ocorrencias.push(e);
          }
      }
  }

}
