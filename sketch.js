let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let somDoJogo;
let personagem;
let inimigo;

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 416],
  [104, 416],
  [208, 416],
  [312, 416],
  [0, 520],
  [104, 520],
  [208, 520],
  [312, 520],
  [0, 624],
  [104, 624],
  [208, 624],
  [312, 624],
  ]

function preload() {
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 
    104, 104)
  frameRate(40);
  //somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  inimigo.exibe();
  inimigo.move();
}