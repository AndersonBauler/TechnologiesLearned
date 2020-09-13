const fatorial = num => {
    let resultado = 1
    for (let fatorando = num; fatorando > 0; fatorando--) {
        resultado *= fatorando
    }
    return resultado
}

console.log(fatorial(1))
console.log(fatorial(4))