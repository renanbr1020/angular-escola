export class Disciplina {
    cod: string;
    nome:string;
    detalhes: string;
    professor: string;
    descricao:string;

    constructor (cod:string,nome:string,detalhes:string,professor?:string,descricao?:string){
        this.cod = cod;
        this.nome = nome;
        this.detalhes = detalhes;
        this.professor = professor;
        this.descricao = descricao;
    }
}