function calcularMedia(vetor) {
    let soma = 0
    const tamanhoVetor = vetor.length
    vetor.forEach(item => soma += item)
    return soma/tamanhoVetor
}

console.log(calcularMedia([0, 10]))