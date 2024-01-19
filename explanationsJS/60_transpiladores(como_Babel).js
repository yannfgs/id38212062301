// Transpiladores (como Babel)

// Os transpiladores convertem o código de uma versão do JavaScript para outra. Por exemplo, o Babel pode converter o código ES6 para ES5 para compatibilidade com navegadores mais antigos. Isso permite que os desenvolvedores usem os recursos mais recentes do JavaScript, sem se preocupar com a compatibilidade do navegador. O Babel também pode converter o JSX para JavaScript comum, permitindo que os desenvolvedores usem o React sem se preocupar com a compatibilidade do navegador. O Babel pode ser usado como uma CLI, ou como uma dependência do Node.js. O Babel também pode ser usado como um plugin para Webpack, Rollup ou Gulp.


// Código ES6
const minhaFuncao = () => {
    console.log("Olá, mundo!");
};

// Código ES5 após transpilação
var minhaFuncao = function minhaFuncao() {
    console.log("Olá, mundo!");
};