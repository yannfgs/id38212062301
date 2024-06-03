// Web Storage: localStorage e sessionStorage

// `localStorage` e `sessionStorage` permitem armazenar dados no navegador do usuário, sendo que `localStorage` persiste mesmo após o navegador ser fechado, enquanto `sessionStorage` é limpo após o fechamento.

// Armazena um item no localStorage
localStorage.setItem('nome', 'João');
console.log(localStorage.getItem('nome'));  // João

// Armazena um item no sessionStorage
sessionStorage.setItem('idade', '30');
console.log(sessionStorage.getItem('idade'));  // 30
