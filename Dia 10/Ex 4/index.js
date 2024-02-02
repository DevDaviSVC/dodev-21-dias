// DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES
let numero = parseInt(prompt('Digite um número para darmos início a sequência de Fibonacci'))
let arrayFibonacci = [numero - 1, numero]

// PREENCHENDO O RESTO DA SEQUÊNCIA, COM NO MÁXIMO 10 ELEMENTOS
for (let i = 2; i < 10; i ++) {
    arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2]
}

console.log(`A sequência gerada foi: ${arrayFibonacci}`)