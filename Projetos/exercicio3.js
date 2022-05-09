function calcularSalario(recebePorHora, horasTrabalhadas) {
    let salario = recebePorHora * horasTrabalhadas
    return `Salário igual a R$ ${salario}`
}

console.log(calcularSalario(150, 40.5))