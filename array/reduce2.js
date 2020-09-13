const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
const alunosMap = alunos.map(alunos => alunos.bolsista)
console.log(alunosMap)
// Desafio 1: Todos os alunos são bolsistas?

const resultado1 = alunosMap.reduce((acumulador, atual) => acumulador && atual)
console.log(resultado1)

// Desafio 2: Algum aluno é bolsista?

const resultado2 = alunosMap.reduce((acumulador, atual) => acumulador || atual)
console.log(resultado2)