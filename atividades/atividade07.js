function bhaskara(ax, bx, c) {
    let delta = (Math.pow(bx, 2) - 4 * ax * c)
    if (delta < 0) {
        return 'Delta é negativo'
    }else {
        let x1 = (-bx + (Math.sqrt(delta)))/(2 * ax)
        let x2 = (-bx - (Math.sqrt(delta)))/(2 * ax)
        return [x1, x2]
    }
}

console.log(bhaskara(1, 5, 0))