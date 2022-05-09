function multiplicar(num1, num2) {
    let soma = 0
    for(let i = 0; i < num2; i++)
        soma += num1
    return soma
}

console.log(multiplicar(5, 5))