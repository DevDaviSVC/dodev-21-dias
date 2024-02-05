// CRIANDO FUNÇÕES
function linha() {
    console.log('==========')
}


function cabecalho(texto) {
    console.log(`===== ${texto} =====`)
}


function login(usuario, senha, arrayUsuarios, arraySenhas) {
    let nomeEncontrado = false
    let senhaEncontrada = false
    let indexNomeEncontrado

    for (let i = 0; i < arrayUsuarios.length; i ++) {
        if (arrayUsuarios[i] == usuario) {
            nomeEncontrado = true
            indexNomeEncontrado = i
            break;
        }
    }

    if (arraySenhas[indexNomeEncontrado] == senha) {
        senhaEncontrada = true
    }

    if (nomeEncontrado === true && senhaEncontrada === true) {
        return true
    } else {
        return false
    }
}


// PROGRAMA PRINCIPAL //
// DECLARANDO VARIÁVEIS
let usuarios = [];
let senhas = [];
let continuar = true
let usuario
let senha

// CRIANDO ESTRUTURA WHILE
while (continuar) {
    let opcaoUsuario = parseInt(prompt('O que você deseja realizar? \n1 - Login \n2 - Cadastrar \n3 - Excluir um cadastro \n4 - Encerrar programa'))

    switch (opcaoUsuario) {
        case 1:
            cabecalho('Login')
            usuario = prompt('Digite o usuário')
            console.log(`Usuário: ${usuario}`)

            senha = prompt('Digite a senha')
            console.log(`Senha: ${senha}`)
            linha()

            let loginAprovado = login(usuario, senha, usuarios, senhas)

            if (loginAprovado) {
                console.log('Login feito com sucesso!')
            } else {
                console.log('Usuário ou senha incorretos.')
            }
            break;

        case 2:
            cabecalho('Novo cadastro')

            usuario = prompt('Digite o usuário a ser cadastrado')
            console.log(`Usuário: ${usuario}`)

            senha = prompt(`Digite a senha do usuário ${usuario}`)
            console.log(`Senha: ${senha}`)
            linha()

            usuarios[usuarios.length] = usuario
            senhas[senhas.length] = senha
            break;

        case 3:
            cabecalho('Excluir cadastro')

            let usuarioEncontrado = false
            usuario = prompt('Digite o usuário a ser excluído')

            for (let i = 0; i < usuarios.length; i ++) {
                if (usuarios[i] == usuario) {
                    usuarioEncontrado = true
                    usuarios.splice(i, 1)
                    senhas.splice(i, 1)
                }
            }

            if (usuarioEncontrado) {
                console.log(`Usuário "${usuario}" excluído com sucesso!`)
            } else {
                console.log(`O usuário "${usuario}" não foi encontrado.`)
            }

            linha()
            break;

        case 4:
            cabecalho('Encerrando programa')
            continuar = false
            break;

        default:
            console.log('ERRO: Opção inválida!')
            break;
            
    }
}