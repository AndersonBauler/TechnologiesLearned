function media(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma / array.length
}

console.log(media([1,2,3,4,5,6,7,8,9]))