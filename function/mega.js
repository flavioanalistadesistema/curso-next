export function mega(quantidade = 6, numeros = []) {
    
    let qtd = +quantidade

    if(qtd < 6 && qtd > 60) {
        throw "Numero invalido"
    }   

    if(numeros.length === qtd){
        return numeros.sort((n1, n2) =>  n1 - n2)
    }

    let numeroAleartorio = parseInt(Math.random() * 60) + 1

    if(!numeros.includes(numeroAleartorio)) {
        return mega(qtd, [...numeros, numeroAleartorio] )
    }
    return mega(qtd, numeros)
}