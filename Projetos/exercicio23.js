function contarPalavras(texto) {
    const palavras = texto.split(" ")
    return palavras.length
}

console.log(contarPalavras("Sou uma frase"))