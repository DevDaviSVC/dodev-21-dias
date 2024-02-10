// DECLARANDO ARRAYS GLOBAIS
let arrayHoteis = [];
let arrayReservas = [];


// CRIANDO CLASSES
class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}


class Reserva {
    Id
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, nomeResponsavel, diaEntrada, diaSaida) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.NomeResponsavel = nomeResponsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}


// CRIANDO FUNÇÕES
function menu() {
    let continuar = true
    
    while (continuar) {
        opcao = parseInt(prompt('O que você deseja realizar? \n1 - Cadastrar novo Hotel \n2 - Cadastrar nova Reserva \n3 - Mostrar todas as reservas de um Hotel \n4 - Informações de uma reserva \n5 - Mostrar todas as reservas de uma pessoa \n6 - Todos os hoteis de uma determinada categoria \n7 - Atualizar o telefone de um hotel \n8 - Encerrar programa'))

        if (opcao > 0 && opcao < 9) {
            continuar = false
        } else {
            alert('ERRO: Não existe a opção ' + opcao + '!')
        }
    }

    return opcao
}


function cadastrarHotel() {
    let id = (arrayHoteis.length + 1)
    let nome = prompt('Nome do hotel')
    let categoria = prompt('Categoria do hotel')
    let endereco = prompt('Endereço do hotel')
    let telefone = prompt('Telefone do hotel')
    let hotel = new Hotel(id, nome, categoria, endereco, telefone)
    arrayHoteis.push(hotel)

    console.log('ID do hotel ' + nome + ': ' + id)
}


function cadastrarReserva() {
    let id = (arrayReservas.length + 1)

    // CRIANDO ESTRUTURA WHILE PARA GARANTIR QUE O ID DO HOTEL DIGITADO SERÁ VÁLIDO
    let continuar = true
    let idHotel
    while (continuar) {
        idHotel = prompt('Id hotel')

        let hotelExiste = false
        arrayHoteis.forEach(hotel => {
            if (hotel.Id == idHotel) {
                hotelExiste = true
            }
        })

        if (hotelExiste) {
            continuar = false
        } else {
            alert('ERRO: Não existe nenhum hotel cadastrado com este ID!')
        }
    }

    let nomeResponsavel = prompt('Nome do responsável da reserva')

    // CRIANDO ESTRUTURA WHILE PARA GARANTIR QUE O DIA DE ENTRADA SERÁ MENOR QUE O DIA DA SAÍDA
    continuar = true
    let diaEntrada
    let diaSaida
    while (continuar) {
        diaEntrada = parseInt(prompt('Dia da entrada'))
        diaSaida = parseInt(prompt('Dia da saída'))

        if (diaEntrada > diaSaida) {
            alert('ERRO: O dia da entrada não pode ser maior que o dia da saída!')
        } else {
            continuar = false
        }
    }

    let reserva = new Reserva(id, idHotel, nomeResponsavel, diaEntrada, diaSaida)
    arrayReservas.push(reserva);

    console.log('ID da reserva da pessoa ' + nomeResponsavel + ': ' + id)
}


function informacoesReservasHotel(idHotel) {
    let hotelExiste = false
    let indexHotel
    let nomeHotel

    arrayHoteis.forEach(hotel => {
        if (hotel.Id == idHotel) {
            hotelExiste = true
            nomeHotel = hotel.Nome
            indexHotel = arrayHoteis.indexOf(hotel)
        }
    })

    if (hotelExiste) {
        arrayReservas.forEach(reserva => {
            if (reserva.IdHotel == idHotel) {
                console.log(`Informações: \nNome hotel: ${nomeHotel} \nNome do responsável: ${reserva.NomeResponsavel} \nDia entrada: ${reserva.DiaEntrada} \nDia saída: ${reserva.DiaSaida}`)
            }
        })
    } else {
        alert('ERRO: Não existe um hotel cadastrado com o ID digitado.')
    }
}


function informacoesReserva(idReserva) {
    let nomeHotel = arrayHoteis[(arrayReservas[idReserva - 1].IdHotel) - 1].Nome;
    let endereco = arrayHoteis[(arrayReservas[idReserva - 1].IdHotel) - 1].Endereco;
    let diaEntrada = arrayReservas[idReserva - 1].DiaEntrada;
    let diaSaida = arrayReservas[idReserva - 1].DiaSaida;
    console.log(`Mostrando informações da reserva ${idReserva}: \nNome hotel: ${nomeHotel} \nEndereço hotel: ${endereco} \nDia da entrada: ${diaEntrada} \nDia da saída: ${diaSaida}`)
}


function reservasPessoa(nomePessoa) {
    console.log('Mostrando reservas da pessoa: ' + nomePessoa)

    arrayReservas.forEach(reserva => {
        if (reserva.NomeResponsavel == nomePessoa) {
            let nomeHotel;

            arrayHoteis.forEach(hotel => {
                if (hotel.Id == reserva.IdHotel) {
                    nomeHotel = hotel.Nome;
                }
            })

            console.log(`Informações: \nNome hotel: ${nomeHotel} \nNome do responsável: ${reserva.NomeResponsavel} \nDia entrada: ${reserva.DiaEntrada} \nDia saída: ${reserva.DiaSaida}`)
        }
    })
}


function hoteisCategoria(categoria) {
    console.log('Hotéis da categoria: ' + categoria)

    arrayHoteis.forEach(hotel => {
        if (hotel.Categoria == categoria) {
            console.log('Hotel ' + hotel.Nome + ', Categoria: ' + hotel.Categoria)
        }
    })
}


function atualizarTelefone(idHotel, novoTelefone) {
    let hotelExiste = false
    let indexHotel

    arrayHoteis.forEach(hotel => {
        if (hotel.Id == idHotel) {
            hotelExiste = true
            indexHotel = arrayHoteis.indexOf(hotel)
        }
    })

    if (hotelExiste) {
        arrayHoteis[indexHotel].Telefone = novoTelefone
    } else {
        alert('ERRO: Não existe nenhum hotel cadastrado com o ID digitado.')
    }
}


//// PROGRAMA PRINCIPAL
// CRIANDO ESTRUTURA WHILE PARA FLUXO DO PROGRAMA
let continuar = true

while (continuar) {
    let opcao = menu()
    let idHotel

    switch (opcao) {
        case 1:
            cadastrarHotel()
            console.log('=====')
            break;

        case 2:
            cadastrarReserva()
            console.log('=====')
            break;

        case 3:
            idHotel = prompt('Digite o ID do hotel')
            informacoesReservasHotel(idHotel)
            console.log('=====')
            break;

        case 4:
            let idReserva = prompt('Digite o DI da reserva')
            informacoesReserva(idReserva)
            console.log('=====')
            break;
        case 5:
            let nomePessoa = prompt('Digite o nome do responsável da reserva')
            reservasPessoa(nomePessoa)
            console.log('=====')
            break;

        case 6:
            let categoria = prompt('Digite a categoria do hotel')
            hoteisCategoria(categoria)
            console.log('=====')
            break;

        case 7:
            idHotel = prompt('Digite o ID do hotel')
            let novoTelefone = prompt('Digite o novo número de telefone')
            atualizarTelefone(idHotel, novoTelefone)
            break;

        case 8:
            console.log('===== ENCERRANDO PROGRAMA =====')
            continuar = false
            break;
    }
}