// CRIANDO FUNÇÃO PARA OPÇÃO DO USUÁRIO
function menu() {
    while (true) {
        opcao = prompt('O que você deseja realizar? \n1 - Cadastrar \n2 - Login \n3 - Excluir um cadastro \n4 - Encerrar programa')
        if (opcao === '1' || opcao === '2' || opcao === '3' || opcao === '4') {
            break;
        } else {
            alert(`ERRO: A opção ${opcao} não existe!`)
        }
    }

    return opcao
}


// CRIANDO FUNÇÃO CADASTRO
function cadastrarUsuario(nome, senha) {
    arrayNomes.push(nome);
    arraySenhas.push(senha);
}


// CRIANDO FUNÇÃO PARA LOGIN DO USUÁRIO
function loginUsuario(nome, senha) {
    let verificarNome = false;
    let verificarSenha = false;

    verificarNome = arrayNomes.includes(nome);

    if (verificarNome === true) {
        indexNome = arrayNomes.indexOf(nome);

        if (arraySenhas[indexNome] == senha) {
            verificarSenha = true
        }
    }

    if (verificarNome === true && verificarSenha === true) {
        return true
    } else {
        return false
    }
}


// CRIANDO FUNÇÃO DE EXCLUSÃO DE CADASTRO
function excluirCadastro(nome) {
    let verificarNome = false;

    verificarNome = arrayNomes.includes(nome)

    if (verificarNome === true) {
        indexNome = arrayNomes.indexOf(nome)
        arrayNomes.splice(indexNome, 1)
        arraySenhas.splice(indexNome, 1)
        console.log('Cadastro excluído com sucesso!')
    } else {
        console.log(`O nome ${nome} não está registrado!`)
    }
}


//// PROGRAMA PRINCIPAL
// DECLARANDO VARIÁVEIS
let continuar = 'S'
let arrayNomes = []
let arraySenhas = []

// CRIANDO ESTRUTURA WHILE
while (continuar === 'S') {
    opcao = menu()

    if (opcao == 1) {
        nome = prompt('Digite o nome do cadastro')
        senha = prompt('Digite a senha do cadastro')
        cadastrarUsuario(nome, senha)
    } else if (opcao == 2) {
        nome = prompt('Digite o nome')
        senha = prompt('Digite a senha')
        login = loginUsuario(nome, senha)

        if (login === true) {
            console.log('Login realizado com sucesso!')
        } else {
            console.log('Usuário ou senha incorretos!')
        }
    } else if (opcao == 3) {
        nome = prompt('Nome do usuário a ser excluído')
        excluirCadastro(nome)
    } else {
        console.log('===== ENCERRANDO PROGRAMA =====')
        continuar = 'N'
    }
}