function nomeDoMes(numeroDoMes) {
    mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    if(numeroDoMes <= 12)
        return mesesDoAno[numeroDoMes-1]
    else
        return "Esse número não corresponde a um mês"
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))
console.log(nomeDoMes(16))