function operacao(valor1, operador, valor2) {
    switch(operador) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(operacao(2, '+', 3))
console.log(operacao(5, '-', 10))
console.log(operacao(3, '*', 4))
console.log(operacao(12, '/', 4))
console.log(operacao(25, 'x', 2))