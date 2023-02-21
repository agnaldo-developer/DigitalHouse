/*
1- Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), 
quantidade de faltas (number) e notas (array de números).
*/

class Aluno {
    constructor(nome, faltas, notas) {
        this.nome = nome,
            this.faltas = faltas,
            this.notas = notas
    }

/*    
2-Na função construtora crie o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora.
*/

    calcularMedia() {
        return (this.notas.reduce((acc, media) => acc + media) / this.notas.length).toFixed(1);
    };

    adicionarFaltas() {
        this.faltas++;
    };

}

const aluno1 = new Aluno("Pedro", 0, [10.0, 7.5, 8.0, 9.0]);
const aluno2 = new Aluno("João", 2, [5.0, 4.5, 3.0, 6.0]);
const aluno3 = new Aluno("Silva", 4, [10.0, 6.5, 5.0, 9.0]);
const aluno4 = new Aluno("Ricardo", 9, [7.0, 8.5, 8.0, 7.5]);
const aluno5 = new Aluno("Mario", 8, [9.0, 7.3, 6.7, 5.2]);
const aluno6 = new Aluno("José", 10, [10.0, 7.0, 8.2, 6.0]);
const aluno7 = new Aluno("Fernando", 0, [4.0, 3.5, 2.4, 5.0]);
const aluno8 = new Aluno("Bento", 2, [9.0, 7.5, 8.5, 9.0]);
const aluno9 = new Aluno("Rogério", 4, [3.0, 4.0, 5.4, 3.2]);
const aluno10 = new Aluno("Andrew", 6, [10.0, 7.0, 8.5, 9.0]);

// TESTE DE CÁCULO DAS MÉDIAS

// console.log(`Média do ${aluno1.nome}: ${aluno1.calcularMedia()}`);
// console.log(`Média do ${aluno2.nome}: ${aluno2.calcularMedia()}`);
// console.log(`Média do ${aluno3.nome}: ${aluno3.calcularMedia()}`);
// console.log(`Média do ${aluno4.nome}: ${aluno4.calcularMedia()}`);
// console.log(`Média do ${aluno5.nome}: ${aluno5.calcularMedia()}`);
// console.log(`Média do ${aluno6.nome}: ${aluno6.calcularMedia()}`);
// console.log(`Média do ${aluno7.nome}: ${aluno7.calcularMedia()}`);
// console.log(`Média do ${aluno8.nome}: ${aluno8.calcularMedia()}`);
// console.log(`Média do ${aluno9.nome}: ${aluno9.calcularMedia()}`);
// console.log(`Média do ${aluno10.nome}: ${aluno10.calcularMedia()}`);

// ADICIONA AS FALTAS

aluno1.adicionarFaltas();
aluno2.adicionarFaltas();
aluno3.adicionarFaltas();
aluno4.adicionarFaltas();
aluno5.adicionarFaltas();
aluno6.adicionarFaltas();
aluno7.adicionarFaltas();
aluno8.adicionarFaltas();
aluno9.adicionarFaltas();
aluno10.adicionarFaltas();

// console.log(`Faltas do ${aluno1.nome}: ${aluno1.faltas}`);
// console.log(`Faltas do ${aluno2.nome}: ${aluno2.faltas}`);
// console.log(`Faltas do ${aluno3.nome}: ${aluno3.faltas}`);
// console.log(`Faltas do ${aluno4.nome}: ${aluno4.faltas}`);
// console.log(`Faltas do ${aluno5.nome}: ${aluno5.faltas}`);
// console.log(`Faltas do ${aluno6.nome}: ${aluno6.faltas}`);
// console.log(`Faltas do ${aluno7.nome}: ${aluno7.faltas}`);
// console.log(`Faltas do ${aluno8.nome}: ${aluno8.faltas}`);
// console.log(`Faltas do ${aluno9.nome}: ${aluno9.faltas}`);
// console.log(`Faltas do ${aluno10.nome}: ${aluno10.faltas}`);

/*
4-Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método 
em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto 
curso.
*/

const estudantes = [];

function adicionadorAlunos(aluno) {
    estudantes.push(aluno);
    return estudantes;
}

adicionadorAlunos(aluno1);
adicionadorAlunos(aluno2);
adicionadorAlunos(aluno3);
adicionadorAlunos(aluno4);
adicionadorAlunos(aluno5);
adicionadorAlunos(aluno6);
adicionadorAlunos(aluno7);
adicionadorAlunos(aluno8);
adicionadorAlunos(aluno9);
adicionadorAlunos(aluno10);

// console.table(estudantes);

/*
3-Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma 
lista de estudantes (um array composto pelos alunos criados no passo 2).
*/

class Curso {
    constructor(nomeCurso, notaAprovacao, faltasMax, estudantes) {
        this.nomeCurso = nomeCurso,
        this.notaAprovacao = notaAprovacao,
        this.faltasMax = faltasMax,
        this.estudantes = estudantes
    }

    buscadorEstudante(estudanteBuscado) {
        for (let estudante of this.estudantes) {
            if (estudanteBuscado === estudante.nome) {
                return estudante;
            }
        }
    }

/*
5-Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. 
Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. 
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
*/
    avaliadorEstudante(estudante) {
        const estudanteEncontrado = this.buscadorEstudante(estudante);
        // console.log(estudanteEncontrado);
        const estudanteMedia = estudanteEncontrado.calcularMedia();
        // console.log(estudanteMedia);
        if(estudanteMedia >= this.notaAprovacao && estudanteEncontrado.faltas < this.faltasMax) {
            return true;
        } 
        else if (estudanteMedia >= this.notaAprovacao + (this.notaAprovacao*0.1) && estudanteEncontrado.faltas == this.faltasMax) {
            return true;
        }
        else {
            return false;
        }
    }

/*
6- Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados
se os alunos aprovaram ou não.
*/

    mostradorAprovados() {
        let aprovados = [];
        for (const estudante of this.estudantes) {
                if(this.avaliadorEstudante(estudante.nome) == true){
                    aprovados.push({nome: estudante.nome, media: estudante.calcularMedia(), faltas: estudante.faltas});
                }
            }
            return aprovados;
    }

    mostradorReprovados() {
        let reprovados = [];
        for (const estudante of this.estudantes) {
                if(this.avaliadorEstudante(estudante.nome) != true){
                    reprovados.push({nome: estudante.nome, media: estudante.calcularMedia(), faltas: estudante.faltas});
                }
            }
            return reprovados;
    }
}

const curso1 = new Curso("Java", 7.0, 10, estudantes);
// console.log(curso1);

// console.log(curso1.buscadorEstudante("Pedro"));
// curso1.avaliadorEstudante("Pedro");
// curso1.avaliadorEstudante("Ricardo");
// curso1.avaliadorEstudante("Rogério");

console.log("---LISTA DE APROVADOS---");
console.log(`---${curso1.nomeCurso}---`);
console.table(curso1.mostradorAprovados());

console.log("---LISTA DE REPROVADOS---");
console.log(`---${curso1.nomeCurso}---`);
console.table(curso1.mostradorReprovados());