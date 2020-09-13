let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // Operadores unarios prefixados são priorizados antes da comparação
console.log(num1 === num2)