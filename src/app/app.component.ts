import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';

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
    new Disciplina('001','Pedro', new Date(4-4-2018)),
    new Disciplina('002','Maria', new Date()),
    new Disciplina('003','Marcos', new Date()),
    new Disciplina('004','Matheus', new Date()),
    
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
      const o = new Disciplina(this.matricula, this.nome, this.data,this.responsavel,this.observacao,this.tipo);
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

  cancelar() {
    this.redefinir();
  }

  redefinir() {
    this.matricula = null;
    this.nome = null;
    this.data = null;
    this.responsavel = null;
    this.observacao = null;
    this.tipo = null;

    this.editando = null;
    this.salvar_ok = false;
   
  }

  armazenar_cache(disciplina){
    localStorage.setItem((disciplina.codigo).toString(), JSON.stringify(disciplina));
  }
  remover_cache(disciplina){
    localStorage.removeItem(disciplina.codigo);
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
