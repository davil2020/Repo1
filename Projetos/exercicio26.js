function removerVogais(texto) {
    const vogais = [ "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    vogais.forEach( vogal => texto = texto.replace(vogal, ''))
    return texto
}

console.log(removerVogais("A 25 eh bixo"))