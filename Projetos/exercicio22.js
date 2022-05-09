function funcaoDaSorte(numeroEscolhido) {
    const Maximo = 10
    const Minimo = 0
    const numeroAleatorio = Math.floor(Math.random() * (Maximo - Minimo + 1) + Minimo)

    return (numeroEscolhido == numeroAleatorio ? 
        `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
        `Que pena, O número sorteado foi o ${numeroAleatorio}`
    )
}

console.log(funcaoDaSorte(10))