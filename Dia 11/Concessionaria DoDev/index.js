// DECLARANDO VARIÁVEIS
let modelos = [];
let anos = [];
let valores = [];
let contadorIndex = 0;

// CRIANDO ESTRUTURA WHILE
while (true) {
    let modelo =  prompt(`Modelo do carro ${contadorIndex + 1}`)
    let ano = parseInt(prompt(`Ano do carro ${contadorIndex + 1}`))
    let valor = parseInt(prompt(`Preço do carro ${contadorIndex + 1}`))

    modelos[contadorIndex] = modelo;
    anos[contadorIndex] = ano;
    valores[contadorIndex] = valor;

    let continuar = prompt('Deseja adicionar mais um carro? [S/N]').toUpperCase().trim()[0]
    if (continuar === 'N') {
        break;
    }

    contadorIndex ++
}

// ORDENANDO POR PREÇO COM ALGORITMO PRÓPRIO
for (let i = 1; i < valores.length; i ++) {
    for (let p = 0; p < valores.length; p ++) {
        if (valores[i] < valores[p]) {
            let menorValor = valores[i];
            valores[i] = valores[p];
            valores[p] = menorValor;

            let modeloBarato = modelos[i];
            modelos[i] = modelos[p];
            modelos[p] = modeloBarato;

            let anoModeloBarato = anos[i];
            anos[i] = anos[p];
            anos[p] = anoModeloBarato;
        }
    }
}

// MOSTRANDO AS INFORMAÇÕES JÁ ORDENADAS
console.log('===== CARROS REGISTRADOS =====')
for (let i = 0; i < modelos.length; i ++) {
    console.log(`${i + 1}º - Modelo: ${modelos[i]}; Ano: ${anos[i]}; Preço: R$${valores[i]}`)
}
console.log('==============================')