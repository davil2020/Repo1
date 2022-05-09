function despesasTotais(despesas) {
    let total = 0
    for(let item of despesas)
        total += item.preco
    return total
}

console.log(despesasTotais([
    {nome: "blabla", categoria: "info", preco: 89.99},
    {nome: "blabla2", categoria: "info2", preco: 150}
]))