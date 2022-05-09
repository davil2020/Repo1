function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray({
    nome: 'Maria',
    profissao: 'desenvolvedora de software'
}))