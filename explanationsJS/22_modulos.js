// Módulos
// Os módulos JavaScript são blocos de código reutilizáveis que exportam recursos específicos para serem usados em outros programas.

// arquivo: modulo.js
export function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// arquivo: app.js
import { saudacao } from './modulo.js';

console.log(saudacao("João")); // Olá, João!