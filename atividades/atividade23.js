function mediaPonderada(cod, nota1, nota2, nota3) {
    if (cod > 0 && nota1 >= 0 && nota2 >= 0 && nota3 >= 0) {
        const media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10
        if (media >= 5) {
            var situacao = "Aprovado"
        } else {
            var situacao = "Reprovado"
        }
        return {cod, nota1, nota2, nota3, media, situacao}
    } else {
        console.log("Valores incorretos!!")
    }
}

console.log(mediaPonderada(1, 4, 3, 3))
console.log(mediaPonderada(2, 10, 5, 2))
console.log(mediaPonderada(3, 10, 5, 0))