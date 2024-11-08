// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function mainAwait(userUrl) {
    try {
        let usersPromise = get(userUrl);
        let r = await usersPromise;
        console.log("Users: ");
        r.forEach(element => {
            console.log(element.name)
        });
        console.log("Nu er fetch kaldt: " + usersPromise);
    } catch (fejl) {
        console.log(fejl);
    }
}

console.log("Før await");
mainAwait(userUrl);
console.log("Efter await");


