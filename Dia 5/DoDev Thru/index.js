// DECLARANDO E ATRIBUINDO VALOR A VARIÁVEL OPÇÃO DO USUÁRIO
let valor
let opcaoDoUsuario = parseInt(prompt('Você chegou ao posto de gasolina! O que você deseja? ' + 
                                    '\n1 = Abastecer com gasolina' + 
                                    '\n2 = Abastecer com álcool' + 
                                    '\n3 = Calibrar os pneus'))

// CRIANDO SWITCH CASE
switch (opcaoDoUsuario) {
    case 1:
        valor = Number(prompt('Quantos R$ você deseja abastecer de Gasolina? [1L = R$5]'))
        console.log('Foram abstecidos ' + (valor / 5) + ' litros de gasolina com R$' + valor)
        break;
    case 2:
        valor = Number(prompt('Quantos R$ você deseja abastecer de Álcool? [1L = R$3]'))
        console.log('Foram abastecidos ' + (valor / 3) + ' litros com R$' + valor)
        break;
    case 3:
        console.log('Pneus calibrados com sucesso!')
        break;
    default:
        console.log('ERRO: A opção ' + opcaoDoUsuario + ' não existe')
        break;
}