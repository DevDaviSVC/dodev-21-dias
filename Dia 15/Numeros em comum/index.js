// DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES
let arrayA = [10, 13, 15, 74, 3, 81, 9, 8, 34, 65]
let arrayB = [10, 64, 82, 81, 15, 19, 32, 56, 5, 9]

// CRIANDO ESTRUTURA PARA VERIFICAÇÃO DOS NÚMEROS EM COMUM
function acharNumerosEmComum(array1, array2) {
    let arrayComum = []

    for (let i = 0; i < 10; i ++) {
        for (let p = 0; p < 10; p ++) {
            if (array1[i] === array2[p]) {
                arrayComum[arrayComum.length] = array1[i]
                break;
            }
        }
    }

    return arrayComum
}

// MOSTRANDO OS NÚMEROS EM COMUM NO CONSOLE
console.log('Os números em comum da lista 1 e 2 são: ' + acharNumerosEmComum(arrayA, arrayB))