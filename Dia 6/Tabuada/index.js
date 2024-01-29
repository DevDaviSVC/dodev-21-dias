// DECLARANDO E ATRIBUINDO VALORES AS VARIÁVEIS
let tabuada = parseInt(prompt('Qual tabuada você quer aprender?'))

// CRIANDO ESTRUTURA FOR
for (let contador = 0; contador < 3; contador ++) {
    tabuada += contador
    if (contador == 1){
        console.log('=== TABUADAS EXTRAS ===')
        console.log('==========')
    }
    console.log('Tabuada do ' + tabuada + ':')
    for (let contadorTabuada = 1; contadorTabuada <= 10; contadorTabuada ++) {
        console.log(tabuada + ' x ' + contadorTabuada + ' = ' + (tabuada * contadorTabuada))
    }
    console.log('==========')
}
console.log('====')
console.log('FIM')
console.log('====')