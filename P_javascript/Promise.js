// creaate a promise that resolves after 2 seconds

const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});