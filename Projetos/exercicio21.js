function menorNumero(numeros) {
    let valorMinimo = numeros[0]
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < valorMinimo)
            valorMinimo = numeros[i]
    }
    return valorMinimo
} 

console.log(menorNumero([10, 5,35, 65]))