// A Fetch API fornece uma interface para buscar recursos (incluindo recursos entre origens) na rede. É uma maneira mais poderosa e flexível de recuperar recursos do que as técnicas mais antigas, como o `XMLHttpRequest`.

fetch('https://api.exemplo.com/dados')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro', error));

// Neste exemplo, estamos usando a Fetch API para recuperar dados de 'https://api.exemplo.com/dados'. A chamada para `fetch` retorna uma promessa que, quando resolvida, passa um objeto `Response` para a primeira função `then`. Então, chamamos `response.json()` para obter outra promessa que, quando resolvida, passa os dados JSON para a segunda função `then`, onde os dados são registrados no console. Se ocorrer um erro em qualquer lugar ao longo do caminho, ele será capturado e registrado no console pela função `catch`.