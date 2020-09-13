function triangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Triângulo Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return 'Triângulo Isósceles'
    }else {
        return 'Triângulo Escaleno'
    }
}

console.log(triangulo(2, 2, 2))
console.log(triangulo(1, 2, 2))
console.log(triangulo(1, 2, 3))