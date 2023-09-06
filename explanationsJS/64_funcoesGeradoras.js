// Funções Geradoras

// As funções geradoras são funções especiais que pausam sua execução e podem ser retomadas posteriormente, permitindo a criação de fluxos de execução personalizados. 

// As funções geradoras são definidas usando a palavra-chave function seguida por um asterisco (*). O corpo da função geradora é definido usando a sintaxe de função normal. A palavra-chave yield é usada para pausar a execução e retornar um valor. A palavra-chave yield pode ser usada apenas dentro de funções geradoras. A palavra-chave yield é seguida por uma expressão ou instrução que será retornada quando a função for retomada. A função geradora pode ser retomada chamando o método next() do objeto retornado pela função geradora. O método next() retorna um objeto com duas propriedades: value, que contém o valor retornado pela função geradora, e done, que indica se a função geradora terminou de executar. O método next() pode receber um argumento que será passado para a função geradora quando ela for retomada. O método next() pode ser chamado várias vezes para retomar a função geradora. Quando a função geradora termina, o método next() retorna um objeto com a propriedade done definida como true. O método next() pode ser usado para passar um erro para a função geradora. O erro será lançado na linha em que a função geradora foi pausada.

function* geradora() {
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
  }
  
  const g = geradora();
  console.log(g.next().value); // "valor 1"
  console.log(g.next().value); // "valor 2"
  