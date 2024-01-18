// Async/Await

// Async/await é uma maneira  de lidar com operações assíncronas em JavaScript. É baseado em Promises, mas tem uma sintaxe mais limpa e é mais fácil de entender e usar.


async function fetchDados() {
    let response = await fetch('http://api.exemplo.com/dados');
    let data = await response.json();
    console.log(data);
}

fetchDados();



// Async/Await é uma funcionalidade da linguagem de programação JavaScript que permite que as funções assíncronas sejam escritas de forma mais clara e legível, sem a necessidade de aninhar callbacks.

// Funções assíncronas são aquelas que executam tarefas que podem levar algum tempo para serem concluídas, como por exemplo fazer uma requisição HTTP. Ao invés de bloquear o fluxo do programa enquanto espera a resposta da requisição, as funções assíncronas permitem que o programa continue executando outras tarefas enquanto aguarda a resposta.

// Antes da introdução do Async/Await, a forma mais comum de lidar com funções assíncronas era através do uso de callbacks, o que muitas vezes resultava em um código confuso e difícil de ler. Com o Async/Await, é possível escrever código assíncrono de forma mais clara e legível, tornando a programação em JavaScript mais eficiente e fácil de entender.