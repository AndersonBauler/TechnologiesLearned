function aumento(plano, salario) {
    switch(plano) {
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.2
        default:
            return 'Plano de aumento inválido'
    }
}

console.log(aumento('A', 1350.50))
console.log(aumento('B', 997.10))
console.log(aumento('C', 6789.80))
console.log(aumento('D', 7500.00))