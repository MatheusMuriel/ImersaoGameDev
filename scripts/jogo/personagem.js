class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, 
    larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
    
    this.frameAtual = 0;

    this.yInicial = height - this.altura;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }

  exibe() {
    image(this.imagem, 0, this.y, 110, 135, 
      this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270
    );
    
    this.anima();
  }

  anima() {
    this.frameAtual++;
    if(this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }

  pula() {
    this.velocidadeDoPulo = -30;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if(this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {
    const precisao = .7;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao, 
      inimigo.x, 
      inimigo.y, 
      inimigo.largura * precisao, 
      inimigo.altura * precisao, 
    );

    return colisao;
  }

}