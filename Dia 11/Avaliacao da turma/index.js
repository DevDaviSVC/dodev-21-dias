// DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES
let nomes = [];
let notas = [];
let contadorIndex = 0;

// CRIANDO ESTRUTURA WHILE PARA PREENCHER AS LISTAS
while (true) {
    nomes[contadorIndex] = prompt(`Digite o nome do aluno ${contadorIndex + 1}`)
    notas[contadorIndex] = parseFloat(prompt(`Digite a nota do aluno ${contadorIndex + 1}`))
    let continuar = prompt('Deseja adicionar mais um aluno? [S/N]').toUpperCase().trim()[0]
    
    if (continuar === 'N') {
        break;
    }

    contadorIndex ++
}

// MOSTRANDO AVALIACAO DA TURMA
let notaTotal = 0

console.log('===== AVALIACAO DA TURMA =====')
for (let contador = 0; contador < nomes.length; contador ++) {
    console.log(`Nome: ${nomes[contador]} = Nota: ${notas[contador]}`)
    notaTotal += notas[contador]
}
let mediaGeral = notaTotal / nomes.length
console.log('=====')
console.log(`Nota total: ${notaTotal}; Media da turma: ${mediaGeral}`)