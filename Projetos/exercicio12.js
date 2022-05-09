function removerPropiedade(objeto, propriedadeRemovida) {
    const copia = Object.assign({}, objeto)
    delete copia[propriedadeRemovida]

    return copia
}
console.log(removerPropiedade({a: 1, b: 2}, "a"))