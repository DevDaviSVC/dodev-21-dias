// DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES
let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))
let opcaoDoUsuario = parseInt(prompt('Qual operação deseja realizar com os números digitados?' + 
                                    '\n1 = Soma' + 
                                    '\n2 = Subtracao' + 
                                    '\n3 = Divisao' + 
                                    '\n4 = Multiplicacao'))

// CRIANDO SWITCH CASE
switch (opcaoDoUsuario) {
    case 1:
        console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2))
        break;
    case 2:
        console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2))
        break;
    case 3:
        console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2))
        break;
    case 4:
        console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2))
        break;
    default:
        console.log('ERRO: A opção "' + opcaoDoUsuario + '" não existe.')
        break;
}
