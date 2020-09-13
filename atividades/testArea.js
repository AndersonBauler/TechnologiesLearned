function media(array) {
    let arg = array
    let soma = 0
    for (let i = 0; i < arg.lenght; i++) {
        soma = soma + arg[i]
    }
    return soma
}

console.log(media([2, 2, 3, 4, 4, 4, 5, 5, 5, 5]))