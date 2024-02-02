// DECLARANDO VARIÁVEIS
let array = [];
let indices = [];
let numeroProcurado = parseInt(prompt('Digite o número a ser procurado'));

// CRIANDO ESTRUTURA FOR PARA POPULAR A LISTA
for (let i = 0; i < 10; i ++) {
    let item = parseInt(prompt('Digite o número a ser adicionado na lista'))
    array[i] = item

}

// CRIANDO ESTRUTURA FOR PARA PROCURAR PELO NÚMERO INFORMADO ANTERIORMENTE
let contadorIndices = 0

for (let i = 0; i < 10; i ++) {
    if (array[i] === numeroProcurado) {
        indices[contadorIndices] = i
        contadorIndices ++
    }

    
}

// CRIANDO ESTRUTURA FOR PARA MOSTRAR OS ÍNDICES ONDE O NÚMERO PROCURADO FOI ENCONTRADO
console.log(`A seguir os índices onde o número ${numeroProcurado} foi encontrado:`)

for (let i = 0; i < indices.length; i ++) {
    console.log(`O número ${numeroProcurado} foi encontrado no índice ${indices[i]};`)
}