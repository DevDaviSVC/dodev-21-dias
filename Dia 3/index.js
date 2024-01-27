// Coletando dados
let nome = prompt('Digite seu nome: ')
let idade = parseInt(prompt('Digite sua idade: '))
let altura = parseFloat(prompt('Digite sua altura em metros: '))
let peso = parseInt(prompt('Digite seu peso em kg: '))

// Operações
let anoDeNascimento = (2024 - idade)
let imc = (peso) / (altura * altura)

// Mostrando resultado final no console
console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoDeNascimento + ', tem ' + altura + ' de altura, pesa ' + peso + 'kg e seu IMC é ' + imc + ' kg/m².')
