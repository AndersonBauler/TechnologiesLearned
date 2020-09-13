function maiorEMenor(array) {
    let maior = array[0]
    let menor = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    return `Maior valor = ${maior}, menor valor = ${menor}`
}

console.log(maiorEMenor([1,2,3,4,5,6,7,8,9,10]))
console.log(maiorEMenor([-2,-5,-10,-55,-80,-8]))