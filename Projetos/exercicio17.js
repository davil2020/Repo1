function somarNumeros(vetor) {
    let soma = 0
    vetor.forEach(item => soma += item)
    return soma
}

console.log(somarNumeros([10, 10, 10]))