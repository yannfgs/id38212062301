// Web APIs

// As APIs fornecem funcionalidades para interagir com o navegador e o ambiente de hospedagem. Exemplos incluem manipulação do DOM, temporizadores, fetch, etc.

// Usando a API Fetch para fazer uma solicitação HTTP
fetch('https://api.exemplo.com/dados')
    .then(Response => Response.json())
    .then(data => console.log(data));