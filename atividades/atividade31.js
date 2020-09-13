function negatives(array) {
    let negativos = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativos++
        }
    }
    return negativos
}

console.log(negatives([1,-10,9,-9,-5,10,11,-1]))