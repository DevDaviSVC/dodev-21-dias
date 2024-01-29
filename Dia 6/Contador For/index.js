// #1
// DECLARANDO E ATRIBUINDO VALORES AS VARIÁVEIS
const numero = parseInt(prompt('Vamos contar de 0 até... (Digite o número)'))

// CRIANDO ESTRUTURA FOR
for (let contador = 0; contador <= numero; contador ++) {
    console.log(contador + '...')
}

console.log('====')
console.log('Agora de 50 até 0')
console.log('====')

// #2
// CRIANDO ESTRUTURA FOR
for (let contador = 0; contador <= 50; contador += 5) {
    console.log(contador + '...')
}

console.log('====')
console.log('Agora de 0 até 50')
console.log('====')

// #3
//CRIANDO ESTRUTURA FOR
for (let contador = 50; contador >= 0; contador -= 5) {
    console.log(contador + '...')
}

console.log('====')
console.log('FIM')
console.log('====')