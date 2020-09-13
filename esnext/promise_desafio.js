const fs = require('fs')
const path = require('path')

function exibirConteudo(endereco) {
    return new Promise(resolve => {
        fs.readFile(endereco, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

exibirConteudo(caminho).then(console.log)