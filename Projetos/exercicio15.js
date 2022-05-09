function somenteOsParesDeIndicesPares(vetor) {
    return vetor.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0

        return numeroPar && indicePar
    })
}

console.log(somenteOsParesDeIndicesPares([1, 2, 3, 4, 4]))