function filtrarNumeros(vetor) {
    return vetor.filter(item => typeof item === "number")
}

console.log(filtrarNumeros(["javascript", 1, 2 ,"26 >>> 25", 26]))