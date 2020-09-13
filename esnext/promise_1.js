const primeiroElemento = arrayOuString => arrayOuString[0]
const transformaLetraMinuscula = letra => letra.toLowerCase()

let promise = new Promise(resolve => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promise.then(primeiroElemento) // Pega primeiro elemento
    .then(primeiroElemento) // Pega primeira letra
    .then(transformaLetraMinuscula)
    //.then(v => console.log(v)) // É o mesmo que:
    .then(console.log)