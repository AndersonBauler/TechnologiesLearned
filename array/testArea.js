var arr = [1, 6, 4, 3, 2, 3, 1, 5, 1, 4]
var soma = 0

arr.forEach(e => {
    soma += Math.pow(e, 2)
});

let media = soma / arr.length
// console.log(media)
console.log(soma)