function repetir(parametro, numeroDeVezes) {
    let vetor = []
    for(let i = 0; i < numeroDeVezes; i++)
        vetor[i] = parametro
    return vetor
}

console.log(repetir("código", 2))
console.log(repetir("código", 7))