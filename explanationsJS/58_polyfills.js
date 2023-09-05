// Pollyfills

// Um polyfill é um pedaço de código (geralmente JavaScript) usado para fornecer funcionalidades modernas em navegadores mais antigos que não as suportam nativamente.

if (!Array.prototype.includes) {
    Array.prototype.includes = function(elemento) {
        return this.indexOf(elemento) !== -1;
    };
}

console.log([1, 2, 3].includes(2)); // true