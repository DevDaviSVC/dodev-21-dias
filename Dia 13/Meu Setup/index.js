// CRIANDO CLASSE COMPUTADOR
class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd

    constructor (tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memoriaRam;
        this.ssd = ssd;
    }

    mostrar() {
        console.log(`== Informações do PC == \nTipo: ${this.tipo} \nProcessador: ${this.processador} \nVideo: ${this.video} \nArmazenamento: ${this.armazenamento}GB \nMemoria RAM: ${this.memoriaRam}GB \nSSD: ${this.ssd}`)
    }
}


//// PROGRAMA PRINCIPAL
// DECLARANDO VARIÁVEIS E ATRIBUINDO SEUS VALORES
let tipo = prompt('Qual o tipo do seu PC? [Desktop / Notebook]')
let processador = prompt('Qual o processador do seu PC?')
let video = prompt('Qual o tipo de placa de vídeo no seu computador? [Integrado / Dedicado]')
let armazenamento = parseInt(prompt('Quantos GB você possui de armazenamento?'))
let memoriaRam = Number(prompt('Quantos GB você possui de memória RAM?'))

let ssd = prompt('O tipo de armazenamento é SSD? [1 = Sim / 2 = Não]')
if (ssd == '1') {
    ssd = true
} else {
    ssd = false
}

pc = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd)

// MOSTRANDO INFORAMAÇÕES NO CONSOLE
pc.mostrar()