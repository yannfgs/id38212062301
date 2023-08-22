const MeuModulo = (() => {
    let privado = "Variável privada";
  
    function metodoPrivado() {
      console.log(privado);
    }
  
    return {
      metodoPublico: () => {
        metodoPrivado();
      }
    };
  })();
  
  MeuModulo.metodoPublico(); // "Variável privada"
  