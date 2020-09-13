function calcMontanteSimples(cap, tax, prazo){
    let montante = cap + (cap * prazo * (tax/100))
    return `Mon. Simples: R$ ${montante.toFixed(2).replace('.',',')}`
}

function calcMontanteComposto(cap, tax, prazo) {
    let montante = cap * (((tax/100) + 1) ** prazo)
    return `Mon. Composto: R$ ${montante.toFixed(2).replace('.',',')}`
}

console.log(calcMontanteComposto(8000, 2.5, 24))
console.log(calcMontanteComposto(6000, 3, 12))
console.log(calcMontanteComposto(50000, 2, 6))

console.log(calcMontanteSimples(8000, 2, 24))
console.log(calcMontanteSimples(6000, 3, 12))
console.log(calcMontanteSimples(50000, 2, 6))