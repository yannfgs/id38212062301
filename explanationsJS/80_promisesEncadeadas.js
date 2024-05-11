// Promises Encadeadas

// Promises podem ser encadeadas para executar tarefas assíncronas em sequência.

fetch("https://api.exemplo.com/dados")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return fetch("https://api.exemplo.com/mais-dados");
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((erro) => console.error("Erro", erro));
