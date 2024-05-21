// JavaScript e Acessibilidade (a11y)

// Acessibilidade na web significa permitir que todos os usuários acessem conteúdos, incluindo pessoas com deficiência.

// Este script adiciona um atributo 'alt' a todas as imagens sem um
document.querySelectorAll('img:not([alt])').forEach(img => {
    img.setAttribute('alt', 'Descrição da imagem');
});