// CRIANDO CLASSES E SEUS MÉTODOS
class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, anoPublicacao) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoPublicacao = anoPublicacao;
    }
}


class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoLivros = []
    constructor(nome, endereco, telefone, acervoLivros) {
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.Acervolivros = acervoLivros;
    }

    buscarLivro(nomeLivro) {
        let livroExiste = false;

        for (let i = 0; i < this.AcervoLivros.length; i ++) {
            if (this.AcervoLivros[i].Titulo == nomeLivro) {
                livroExiste = true;
                let livro = this.AcervoLivros[i]
                console.log(`Informações do livro: \nTítulo: ${livro.Titulo} \nAutor: ${livro.Autor} \nEditora: ${livro.Editora} \nAno de publicação: ${livro.AnoPublicacao} \nDisponibilidade: ${livro.Disponibilidade}`)

                i = this.AcervoLivros.length;
            }
        }

        if (!livroExiste) {
            alert('ERRO: O livro procurado não existe!')
        }
    }

    emprestimoLivro(nomeLivro) {
        let livroExiste = false;

        for (let i = 0; i < this.AcervoLivros.length; i ++) {
            if (this.AcervoLivros[i].Titulo == nomeLivro) {
                livroExiste = true;
                let livro = this.AcervoLivros[i];

                if (livro.Disponibilidade) {
                    this.AcervoLivros[i].Disponibilidade = false
                    return true
                } else {
                    return false
                }
            }
        }

        if (!livroExiste) {
            alert(`ERRO: O livro "${nomeLivro}" não existe na biblioteca!`)
        }
    }

    devolucaoLivro(nomeLivro) {
        let livroExiste  = false

        for (let i = 0; i < this.AcervoLivros.length; i ++) {
            if (this.AcervoLivros[i].Titulo == nomeLivro) {
                livroExiste = true

                if (!this.AcervoLivros[i].Disponibilidade) {
                    this.AcervoLivros[i].Disponibilidade = true
                    i = this.AcervoLivros.length;
                } else {
                    alert('Este livro já está disponível!')
                }
                
            }
        }

        if (!livroExiste) {
            alert('ERRO: O livro a ser devolvido não existe!')
        }
    }

    adicionarLivro() {
        let titulo = prompt('Título do livro')
        let autor = prompt('Autor do livro')
        let editora = prompt('Editora do livro')
        let anoPublicacao = prompt('Ano de publicação do livro')
        let livro = new Livro(titulo, autor, editora, anoPublicacao)
        this.AcervoLivros.push(livro);
    }
}


// CRIANDO FUNÇÕES
function menu() {
    let verificacao = false;

    do {
        

        opcaoUsuario = parseInt(prompt('O que você deseja realizar? \n1 - Adicionar livro \n2 - Devolver livro \n3 - Fazer empréstimo de um livro \n4 - Buscar um livro \n5 - Encerrar programa'))

        if (opcaoUsuario > 0 && opcaoUsuario < 6) {
            verificacao = true
        }
    } while (!verificacao)

    return opcaoUsuario
}


//// PROGRAMA PRINCIPAL
// CRIANDO ESTRUTURA WHILE PARA FLUXO DO PROGRAMA
let biblioteca = new Biblioteca("Davi's library", "Rua dos livros, 123", "35999999999", [])
let continuar = true;

do {
    let nomeLivro
    opcaoUsuario = menu();

    switch (opcaoUsuario) {
        case 1:
            biblioteca.adicionarLivro()
            break;

        case 2:
            nomeLivro = prompt('Digite o título do livro a ser devolvido')
            biblioteca.devolucaoLivro(nomeLivro)
            break;

        case 3:
            nomeLivro = prompt('Digite o título do livro a ser emprestado')
            biblioteca.emprestimoLivro(nomeLivro)
            break;

        case 4:
            nomeLivro = prompt('Digite o título do livro a ser procurado')
            biblioteca.buscarLivro(nomeLivro)
            console.log('=====')
            break;
        
        case 5:
            continuar = false;
            console.log('===== ENCERRANDO PROGRAMA =====')
            break;
    }
} while (continuar)
