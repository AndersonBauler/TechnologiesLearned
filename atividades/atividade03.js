function potencia(base, expo) {
    let resultado = 1;
    for (let i = 1; i <= expo; i++){
        resultado *= base
    }
    return resultado
}

console.log(potencia(2, 5))
console.log(potencia(10, 4))