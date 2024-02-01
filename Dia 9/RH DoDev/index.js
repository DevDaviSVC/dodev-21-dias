function linha() {
    console.log('=====')
}

// CRIANDO ESTRUTURA DO/WHILE
let continuar

do {
    continuar = ' '
    // DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES DENTRO DA ESTRUTURA WHILE
    let resposta

    while (resposta !== 'S') {
        var nome = prompt('Digite seu nome')
        console.log(`Nome digitado: ${nome}`)

        var idade = parseInt(prompt('Digite sua idade'))
        console.log(`Idade digitada: ${idade} anos`)

        var salarioAtual = parseInt(prompt('Digite seu salário atual'))
        console.log(`Salário digitado: R$${salarioAtual}`)

        linha()

        resposta = prompt('Confirme as informações digitadas [Sim/Não]').toUpperCase().trim()[0]
    } 

    // SIMULAÇÃO DO SALÁRIO DO USUÁRIO PELOS PRÓXIMOS 10 ANOS
    let anoAtual = 2024
    let aumento = 1.5
    let salarioAumentado = salarioAtual

    for (let ano = 1; ano <= 10; ano ++) {
        salarioAumentado += salarioAumentado * (aumento / 100)
        console.log(`${anoAtual + ano} - R$${salarioAumentado}`)
        aumento *= 2
    }

    linha()

    // PERGUNTANDO SE O USUÁRIO DESEJA UTILIZAR O PROGRAMA MAIS UMA VEZ
    while (continuar !== 'S' && continuar !== 'N') {
        continuar = prompt('Deseja utilizar o programa mais uma vez? [Sim/Não]').toUpperCase().trim()[0]
        if (continuar !== 'S' && continuar !== 'N') {
            console.log('ERRO: Digite apenas Sim e Não como resposta.')
        }
    } 
} while (continuar === 'S')

console.log('=== ENCERRANDO ===')