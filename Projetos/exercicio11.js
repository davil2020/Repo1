function receberPrimeiroEUltimoElemento(vetor) {
    let resultado = []
    const indiceDoUltimo = vetor.length - 1
    resultado[0] = vetor[0] 
    resultado[1] = vetor[indiceDoUltimo] 
    return resultado
}

console.log(receberPrimeiroEUltimoElemento([1, 2, 3]))