// DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES
let saldoTotal = 1000
let mediaValoresInseridos = 0
let totalValoresInseridos = 0
let maiorValorInserido = 0
let valor = 0
let desejaContinuar
let opcaoUsuario
let nome = prompt('Digite seu nome')
let cpf = prompt('Digite seu CPF')


// CRIANDO ESTRUTURA DO/WHILE
do {
    do {
        valor = Number(prompt('Digite o valor'))
    } while (valor < 0)

    if (valor > maiorValorInserido) {
        maiorValorInserido = valor
    }

    opcaoUsuario = prompt('Digite a sua opção de saque ou depósito com o valor digitado. [S = Saque/D = Depósito]').toUpperCase().trim()[0]

    if (opcaoUsuario === 'S') {
        if (valor > saldoTotal) {
            while (valor > saldoTotal) {
                console.log('ERRO: O valor digitado não está disponível para ser sacado, digite outro valor.')
                valor = Number(prompt('Digite o valor'))
            }
        }
        saldoTotal -= valor
        console.log('Saque de R$' + valor + ' realizado! Seu saldo atual é R$' + saldoTotal)
    } else {
        saldoTotal += valor
        console.log('Depósito de R$' + valor + ' realizado! Seu saldo atual é R$' + saldoTotal)
    }

    totalValoresInseridos ++
    mediaValoresInseridos = (mediaValoresInseridos + valor) / totalValoresInseridos

    while (true) {
        desejaContinuar = Number(prompt('Deseja continuar? [1 para Sim, 2 para Não]'))
        if (desejaContinuar === 1 || desejaContinuar === 2) {
            break
        }
        console.log('ERRO: Digite apenas 1 ou 2 como resposta.')
    }

} while (desejaContinuar === 1)

// MOSTRANDO RESULTADO FINAL NO CONSOLE
console.log('==========')
console.log('- O seu saldo atual agora é R$' + saldoTotal)
console.log('- O maior valor inserido foi R$' + maiorValorInserido)
console.log('- A média dos valores inseridos foi de R$' + mediaValoresInseridos)