function valorAtual(valor1, valor2) {
    let total = valor1 + valor2
    console.log(`R$ ${total.toFixed(2).replace('.', ',')}`)
}

valorAtual(0.2, 0.1)
valorAtual(0.9, 0.1)
valorAtual(119.99, 256.80)