function calcPedido(codigo, quant) {
    switch(codigo) {
        case 100:
            return quant * 3
        case 200:
            return quant * 4
        case 300:
            return quant * 5.5
        case 400:
            return quant * 7.5
        case 500:
            return quant * 3.5
        case 600:
            return quant * 2.8
        default:
            return 'Código incorreto'
    }
}

console.log(calcPedido(100, 4))
console.log(calcPedido(200, 2))
console.log(calcPedido(300, 1))
console.log(calcPedido(400, 3))
console.log(calcPedido(500, 6))
console.log(calcPedido(600, 2))
console.log(calcPedido(10, 5))