function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQatrocentos = ano % 400 == 0

    return ( divisivelPorQuatro && !divisivelPorCem) || divisivelPorQatrocentos
}