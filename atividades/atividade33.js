let vetorInteiro = [1, 2, 3, 4]
let vetorString = ["Anderson", "José", "Pedro", "Carlos"]
let vetorDouble = [1.2, 2.4, 4.8, 8.16]

function concat(...args) {
    resultado = []
    for (i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concat(vetorInteiro, vetorString))
console.log(concat(vetorInteiro, vetorDouble))
console.log(concat(vetorDouble, vetorString))