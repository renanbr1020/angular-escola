export class Disciplina {
  matricula: string;
  nome: string;
  data: Date;
  responsavel: string;
  observacao: string;
  tipo: string;
  
  constructor(matricula:string,nome: string, data:Date, responsavel?:string, observacao?: string,tipo?:string, ) {
    this.matricula = matricula;
    this.nome = nome;
    this.data = data;
    this.responsavel = responsavel;
    this.observacao = observacao;
    this.tipo = tipo;
  
  }
}
