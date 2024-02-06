// CRIANDO FUNÇÃO QUE SOLICITA AS INFORMAÇÕES DO USUÁRIO
function solicitarInformacoes() {
    let nome = prompt('Digite o seu nome')
    let salario = parseInt(prompt('Digite seu salário atual'))
    aumentoSalario(nome, salario)
}


// CRIANDO FUNÇÃO QUE CALCULA O AUMENTO DO SALÁRIO
function aumentoSalario (nome, salario) {
    let salarioAtual = salario
    let porcentagem = 0
    switch (true) {
        case salario <= 1500:
            porcentagem = 20
            salario = salario + (salario * (porcentagem / 100))
            break;
        case salario <= 2000:
            porcentagem = 15
            salario = salario + (salario * (porcentagem / 100))
            break;
        case salario <= 3000:
            porcentagem = 10
            salario = salario + (salario * (porcentagem / 100))
            break;
        case salario > 3000:
            porcentagem = 5
            salario = salario + (salario * (porcentagem / 100))
            break;
    }

    console.log(`Olá ${nome}, seu salário de R$${salarioAtual} sofreu um reajuste de ${porcentagem}% e agora seu salário é de R$${salario}!`)

    continuar()
}


// CRIANDO FUNÇÃO QUE PERGUNTA AO USUÁRIO SE ELE DESEJA A CALCULAR NOVAMENTE COM NOVAS INFORMAÇÕES
function continuar() {
    let desejaContinuar
    while (desejaContinuar !== 1 && desejaContinuar !== 2) {
        desejaContinuar = parseInt(prompt('Deseja calcular novamente com novas informações? [1 - Sim / 2 - Não]'))

        if (desejaContinuar === 1) {
            solicitarInformacoes()
        } else if (desejaContinuar === 2) {
            console.log('===== ENCERRANDO PROGRAMA =====')
        } else {
            alert('ERRO: Digite apenas 1 ou 2 como resposta!')
        }
    }
}


//// PROGRAMA PRINCIPAL
// CHAMANDO FUNÇÃO solicitarInformacoes()
solicitarInformacoes()