// DECLARANDO E ATRIBUINDO VALORES AS VARIÁVEIS
let estaComFome = prompt('Está com fome? [S/N]: ')
estaComFome = estaComFome.toUpperCase().trim()[0]

let temDinheiro = prompt('Você está com dinheiro? [S/N]: ')
temDinheiro = temDinheiro.toUpperCase().trim()[0]

let restauranteEstaAberto = prompt('O restaurante está aberto agora? [S/N]: ')
restauranteEstaAberto = restauranteEstaAberto.toUpperCase().trim()[0]

// MOSTRANDO RESULTDO FINAL DE ACORDO COM OS VALORES DA VARIÁVEIS
if (estaComFome === 'N' || temDinheiro === 'N') {
    console.log('Hoje a janta será em casa!')
} else if (restauranteEstaAberto === 'N') {
    console.log('Vamos de delivery hoje!')
} else {
    console.log('Hoje é dia de ir no seu restaurante favorito!')
}
