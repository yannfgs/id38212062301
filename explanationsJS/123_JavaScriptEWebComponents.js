// JavaScript e Web Components

// Web Components são um conjunto de APIs da Web que permitem criar novas tags HTML personalizadas, reutilizáveis e encapsuladas.


// Definindo um novo componente web que é um botão com um contador
class BotaoContador extends HTMLElement {
    constructor() {
      super();
      this.contador = 0;
    }
  
    connectedCallback() {
      this.innerHTML = `<button>Clicks: ${this.contador}</button>`;
      this.addEventListener('click', this.incrementar.bind(this));
    }
  
    incrementar() {
      this.contador++;
      this.innerHTML = `<button>Clicks: ${this.contador}</button>`;
    }
  }
  
  customElements.define('botao-contador', BotaoContador);
  