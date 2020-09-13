function compra(carro) {
    switch(carro) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere esse modelo?'
        default:
            return 'Não trabalhamos com esse tipo de automóvel por aqui'
    }
}

console.log(compra('hatch'))
console.log(compra('sedan'))
console.log(compra('motocicleta'))
console.log(compra('caminhonete'))
console.log(compra('sport'))