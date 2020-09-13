// AF = Arrow Function

//AF anônima e sem parâmetros, sempre colocar "()" no lugar dos parâmetros, caso a função tenha somente uma linha é automaticamente aplicado "return" após "=>".
const func1 = () => "Hello world!"
console.log(`func1: ${func1()}`)


//AF com um único parâmetro não precisa de "()".
const func2 = valor => valor * 2
console.log(`func2: ${func2(5)}`)


//AF com mais de um parâmetro é necessário envolver os mesmos com "()".
const func3 = (valor1, valor2) => valor1 + valor2
console.log(`func3: ${func3(1, 2)}`)


//AF com mais de uma linha é obrigatório usar "{}" e "return"
const func4 = (valor1, valor2) => {
    valor3 = valor1 + valor2
    return valor3 + valor2
}
console.log(`func4: ${func4(2, 6)}`)