// DECLARANDO E ATRIBUINDO VALORES AS VARIÁVEIS
let nome = prompt('Digite seu nome: ')
let idade = parseInt(prompt('Digite sua idade: '))

let possuiCarta = prompt('Possui carteira de motorista? [S/N]: ')
possuiCarta = possuiCarta.toUpperCase().trim()[0]

let possuiCarro = prompt('Possui carro? [S/N]: ')
possuiCarro = possuiCarro.toUpperCase().trim()[0]


// MOSTRANDO O RESULTADO FINAL DE ACORDO COM OS VALORES DAS VARIÁVEIS
if (idade <= 18 || possuiCarta == 'N') {
    console.log(nome + ', você não pode dirigir.')
} else if (possuiCarro == 'N') {
    console.log(nome + ', você pode dirigir, porém não possui um carro.')
} else {
    console.log(nome + ', você pode dirigir!')
}