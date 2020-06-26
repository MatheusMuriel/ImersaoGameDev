class Vida {
  constructor(maximo, inicial) {
    this.maximo = maximo;
    this.inicial = inicial;

    this.vidas = this.inicial;

    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margin = i * 10;
      const posicao = this.xInicial * (1 + i);

      image(imagemVida, posicao + margin, this.y, this.largura, this.altura);
    }
  }

  ganharVida() {
    if (this.vidas <= this.maximo) this.vidas++;
  }

  perdeVida() {
    this.vidas--;
  }
}
