function verifyVector(vetor) {
    inside = 0
    outside = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] <= 20 && vetor[i] >= 10) {
            inside++
        } else {
            outside++
        }
    }
    console.log(`${inside} números estão dentro do intervalo.`)
    console.log(`${outside} números estão fora do intervalo.`)
}

verifyVector([11,2,1,2,1,2,1,2,1,2,11])
verifyVector([12,60,44,23])