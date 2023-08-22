class Observado {
    constructor() {
      this.observadores = [];
    }
  
    inscrever(fn) {
      this.observadores.push(fn);
    }
  
    notificar(data) {
      this.observadores.forEach(fn => fn(data));
    }
  }
  
  const obs = new Observado();
  
  obs.inscrever(data => console.log("Observador 1:", data));
  obs.inscrever(data => console.log("Observador 2:", data));
  
  obs.notificar("Notificado!");
  