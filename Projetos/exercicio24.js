function contarCaractere(caractere, texto) {
    let total = 0
    for(let i = 0; i < texto.length; i++){
        if(texto.charAt(i) === caractere)
            total++
    }
    return total
}

console.log(contarCaractere("c", "Conhece-te a ti mesmo"))