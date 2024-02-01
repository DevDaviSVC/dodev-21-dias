// CRIANDO FUNÇÃO QUE MOSTRA UMA LINHA NO CONSOLE
function linha() {
    console.log('=====')
}

// DECLARANDO VARIÁVEL QUE VAI RECEBER RESPOSTA DO USUÁRIO SE ELE QUER UTILIZAR OU ENCERRAR O PROGRAMA
let resposta

// CRIANDO LOOP DO/WHILE
do {
    // DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES
    let nome = prompt('Qual o seu nome?')
    let idade = parseInt(prompt('Qual a sua idade?'))
    let peso = parseFloat(prompt('Qual o seu peso em kg?'))
    let altura = parseFloat(prompt('Qual a sua altura?'))
    let profissao = prompt('Qual a sua profissão?')

    // EXIBINDO TODAS ESSA INFORMAÇÕES EM UM TEXTO NO CONSOLE
    console.log(`Olá, ${nome}! Idade = ${idade}, Peso = ${peso}kg, Altura = ${altura}m, Profissão = ${profissao}.`)

    linha()

    // VERIFICANDO SE O USUÁRIO É MAIOR DE IDADE
    if (idade >= 18) {
        console.log('Tá liberado para tomar uma gelada!')
    } else {
        console.log('Vai ter que esperar mais um tempo para poder tomar uma gelada.')
    }

    linha()

    // MOSTRANDO A IDADE DO USUÁRIO EM MESES SEMANAS E DIAS
    let idadeDias = (idade * 365)
    let idadeSemanas = (idadeDias / 7)
    let idadeMeses = (idadeDias / 30)

    console.log(`Sua idade em anos é: ${idade} anos \nSua idade em meses é: ${idadeMeses} meses \nSua idade em semanas é: ${idadeSemanas} semanas \nSua idade em dias é: ${idadeDias} dias`)

    linha()

    // CALCULANDO IMC E MOSTRANDO A FAIXA DO USUÁRIO
    let imc = peso / (altura * altura)
    console.log(`Seu IMC é de: ${imc} kg/m²`)

    switch (true) {
        case imc < 18.5:
            console.log('Sua faixa é: Magreza')
            break;
        case imc < 24.9:
            console.log('Sua faixa é: Normal')
            break;
        case imc < 30:
            console.log('Sua faixa é: Sobrepeso')
            break;
        default:
            console.log('Sua faixa é: Obesidade')
            break;
    }

    linha()

    // CALCULANDO E MOSTRANDO ANO DE NASCIMENTO DO USUÁRIO
    let anoDeNascimento = (2024 - idade)
    console.log(`Com a idade ${idade} anos, o ano de nascimento do usuário é ${anoDeNascimento}`)

    linha()

    // EXIBINDO A IDADE DO USUÁRIO EM CADA ANO DESDE QUE ELE NASCEU
    for (let idadeAno = 0; idadeAno <= idade; idadeAno ++) {
        console.log(`${anoDeNascimento + idadeAno} - ${idadeAno} anos de idade`)
    }

    linha()

    // PERGUNTANDO PARA O USUÁRIO SE ELE DESEJA UTILIZAR O PROGRAMA MAIS UMA VEZ
    do {
        resposta = prompt('Deseja utilizar o programa mais uma vez? [Sim/Não]').toUpperCase().trim()[0]
        if (resposta !== 'S' && resposta !== 'N') {
            console.log('ERRO: Digite apenas Sim e Não como resposta.')
        }

    } while (resposta !== 'S' && resposta !== 'N')

} while (resposta === 'S')

console.log('=== ENCERRANDO ===')