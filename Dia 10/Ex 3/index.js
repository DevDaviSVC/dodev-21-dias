// DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES
let array = []
let arrayInvertido = []
let comprimento = parseInt(prompt('Digite qual será o comprimento da lista'))

// PREENCHENDO ARRAY COM NÚMEROS DIGITADOS PELO USUÁRIO E MOSTRANDO-O NO CONSOLE
for (let i = 0; i < comprimento; i ++) {
    array[i] = parseInt(prompt(`Digite o número no índice ${i}`))
}

console.log(`Lista dos números digitados: ${array}`)
console.log('=====')

// PREENCHENDO ARRAYINVERTIDO COM OS NÚMEROS DA LISTA ARRAY EM ORDEM INVERTIDA E MOSTRANDO-O NO CONSOLE
let contadorArrayInvertido = 0

for (let i = (comprimento - 1); i >= 0; i --) {
    arrayInvertido[contadorArrayInvertido] = array[i]
    contadorArrayInvertido ++
}

console.log(`Lista dos números digitado em ordem invertida: ${arrayInvertido}`)