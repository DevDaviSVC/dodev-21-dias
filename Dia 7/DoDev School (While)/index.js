// DECLARANDO VARIÁVEIS
let nota = 0
let sexo = ''
let mediaGeral = 0
let homens = 0
let mulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let numeroAlunos = 0
let resposta = 'S'

// CRIANDO ESTRUTURA WHILE
while (resposta === 'S') {
    numeroAlunos ++
    nota = Number(prompt('Nota do aluno ' + numeroAlunos))
    sexo = prompt('Sexo do aluno ' + numeroAlunos + ' [M/F]').toUpperCase().trim()[0]
    mediaGeral = (mediaGeral + nota) / numeroAlunos

    if (sexo == 'M') {
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        homens ++
    }

    if ((sexo == 'F') && (nota > 7)) {
        mulheresAcimaDe7 ++
    }

    while (true) {
        resposta = prompt('Deseja cadastrar mais uma nota? [S/N]').toUpperCase().trim()[0]
        if ((resposta == 'S') || (resposta == 'N')) {
            break
        }
        console.log('ERRO: Digite apenas Sim e Não como resposta.')
    }
}

// MOSTRANDO RESULTADO FINAL NO CONSOLE
console.log('==========')
console.log('- A média geral das notas dos alunos foi: ' + mediaGeral)
console.log('- A quantidade homens registrados foi de: ' + homens + ' homens')
console.log('- A quantidade de mulheres com a nota acima de 7 foi de: ' + mulheresAcimaDe7 + ' mulheres')
console.log('- A maior nota entre os homens foi de: ' + maiorNotaHomens)