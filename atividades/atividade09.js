function classificacao(nota) {
    let resultado = nota
    if (nota >= 38) {
        if (nota % 5 <= 2) {
            resultado = Math.floor(nota / 5) * 5
        }else {
            resultado = Math.ceil(nota / 5) * 5
        }
    }
    return resultado
}

console.log(classificacao(46))
console.log(classificacao(47))
console.log(classificacao(48))
console.log(classificacao(37))