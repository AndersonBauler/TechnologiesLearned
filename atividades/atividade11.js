const bissexto = ano => {
    if ((ano % 4) == 0) {
        if ((ano % 400) == 0) {
            console.log(`${ano} é bissexto!`)
        } else if ((ano % 100) == 0) {
            console.log(`${ano} não é bissexto!`)
        } else {
            console.log(`${ano} é bissexto!`)
        }
    } else {
        console.log(`${ano} não é bissexto!`)
    }
}

bissexto(1500)
bissexto(1880)
bissexto(2024)
bissexto(1700)
bissexto(1800)
bissexto(2000)