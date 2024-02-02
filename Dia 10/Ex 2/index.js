// DECLARANDO VARIÁVEIS
let array = []
let arrayInvertido = []

// PREENCHENDO ARRAY COM 5 NÚMEROS DIGITADOS PELO USUÁRIO
for (let i = 0; i <= 4; i ++) {
    array[i] = parseInt(prompt( `Digite o número do índice ${n}`))
}

console.log(`Lista com os números digitados: ${array}`)
console.log('=====')

// PREENCHENDO ARRAYINVERTIDO E EXIBINDO-O NO CONSOLE
let contadorArrayInvertido = 0
for (let i = 4; i >= 0; i --) {
    arrayInvertido[contadorArrayInvertido] = array[i]
    contadorArrayInvertido ++
}

console.log(`Lista com a ordem invertida: ${arrayInvertido}`)