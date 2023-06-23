let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promessa resolvida!');
    }, 1000);
});

promise.then(value => console.log(value)); // 'Promessa resolvida!' após 1 segundo