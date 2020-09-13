function calcMelhorTroco(valor) {
    let valorNotas = [100, 50, 10, 5, 1]
    let arrayQuantNotas = []
    for (let i = 0; i < valorNotas.length; i++) {
        var contadorNotas = 0
        while ((valor - valorNotas[i]) >= 0) {
        valor -= valorNotas[i]
        contadorNotas += 1
        }
        arrayQuantNotas.push(contadorNotas)
    }
    let resultado = ''
    for (let i = 0; i < valorNotas.length; i++) {
        if (arrayQuantNotas[i] > 0) {
        resultado += `${arrayQuantNotas[i]} nota(s) de R$ ${valorNotas[i]}. `
        }
    }
    return resultado
}

console.log(calcMelhorTroco(166))
console.log(calcMelhorTroco(230))
console.log(calcMelhorTroco(142))
console.log(calcMelhorTroco(756))
console.log(calcMelhorTroco(1989))
console.log(calcMelhorTroco(122))