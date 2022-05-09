function buscarPalavrasSemelhantes(iniciais, palavras) {
    return palavras.filter(palavra => palavra.includes(iniciais))
}

console.log(buscarPalavrasSemelhantes("pro",["programação", "profissional","26 >>> 25"]))