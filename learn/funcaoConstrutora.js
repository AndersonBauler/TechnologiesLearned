function Livro(nome, categ, ano) {
    this.nome = nome
    this.categ = categ
    this.ano = ano
}

const raiam = new Livro('Sem filtro', 'Auto-ajuda', 2019)

console.log(raiam.categ)

if (1 < -1 && 2 >  3) {
    console.log('teste')
}