// CRIANDO CLASSE CARRO
class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao

    constructor (nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }

    deltaTempo (distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado
    }
}


// CRIANDO CLASSE CORRIDA
class Corrida {
    nome
    tipo
    distancia
    participantes
    vencedor

    constructor(nome, tipo, distancia, participantes) {
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = participantes
    }

    identificarVencedor() {
        let menorTempo
        let nomeMenorTempo

        for (let i = 0; i < this.participantes.length; i ++) {
            let tempo = this.participantes[i].deltaTempo(this.distancia)
            let nome = this.participantes[i].nome

            if (i === 0) {
                menorTempo = tempo
                nomeMenorTempo = nome
            } else {
                if (tempo < menorTempo) {
                    menorTempo = tempo
                    nomeMenorTempo = nome
                }
            }
        }
        return nomeMenorTempo
    }


    mostrarVencedor() {
        console.log(`A equipe vencedora foi: ${this.identificarVencedor()}`)
    }
}


//// PROGRAMA PRINCIPAL
// DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES
let continuar = true
let participantes = []

// CRIANDO ESTRUTURA WHILE PARA ADICIONAR PARTICIPANTES
while (continuar) {
    let nome = prompt('Nome da equipe do carro')
    let potencia = parseInt(prompt('Digite a quantidade de cavalos do carro'))
    let velocidadeMaxima = parseInt(prompt('Velocidade máxima do carro em km/h'))
    let aceleracao = Number(prompt('Aceleração: Tempo em segundos que o carro leva para ir de 0 até 100 km/h'))

    participantes[participantes.length] = new Carro(nome, potencia, velocidadeMaxima, aceleracao)

    resposta = prompt('Deseja adicionar mais um participante? [1 - Sim / 2 - Não]')
    if (resposta == '2') {
        continuar = false
    }
}

let distancia = parseInt(prompt('Distância em metros que o carro terá de percorrer'))
let nomeCorrida = prompt('Nome do local da corrida')
let tipoCorrida = prompt('Nome do tipo da corrida')

let corrida = new Corrida(nomeCorrida, tipoCorrida, distancia, participantes)

// MOSTRANDO VENCEDOR NO CONSOLE
corrida.mostrarVencedor()