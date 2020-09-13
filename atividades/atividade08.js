function desempenho(lista) {
    let arrString = lista.split(' ')
    let arrNumber = []
    let indexMenor = 0
    let maior = parseInt(arrString[0])
    let record = 0
    for (let i = 0; i < arrString.length; i++) {
        arrNumber[i] = parseInt(arrString[i])
        if (arrNumber[i] > maior) {
            maior = arrNumber[i]
            record += 1
        }
        if (arrNumber[i] < arrNumber[indexMenor]) {
            indexMenor = i
        }
    }
    return [record, (indexMenor + 1)]
}
console.log(desempenho('10 20 20 8 25 3 0 30 1'))
console.log(desempenho('9 8 79 1 45 69 3 80'))