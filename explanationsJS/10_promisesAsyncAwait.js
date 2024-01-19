// Promises são uma maneira de lidar com operações assíncronas em JavaScript. Async/await é uma sintaxe que permite que você trabalhe com Promises de uma maneira mais confortável.


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promessa cumprida!");
    }, 1000);
});

promise.then(message => {
    console.log(message); // "Promessa cumprida!"
});

// Aysnc/Await
async function exemploAsyncAwait() {
    let message = await promise;
    console.log(message); // "Promessa cumprida!"
}

exemploAsyncAwait();