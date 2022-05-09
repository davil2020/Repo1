function simboloMais(quantidadeDeSimbolos) {
    let final = ''
    for(let i = 0; i < quantidadeDeSimbolos; i++)
        final += '+'
    return final
}

console.log(simboloMais(7))