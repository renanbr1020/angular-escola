export class Disciplina {
  codigo: string;
  nome: string;
  descricao: string;
  data: Date;
  ativo: string;
  tipo: string;
  periodo:string;
  
  constructor(codigo:string,nome: string, descricao?: string, data?:Date, ativo?:string, tipo?:string, periodo?: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.ativo = ativo;
    this.tipo = tipo;
    this.periodo = periodo;
   
  }
}
