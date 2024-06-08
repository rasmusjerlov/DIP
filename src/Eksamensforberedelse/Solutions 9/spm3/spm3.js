function gaetTalISyttenTabel() {
    return new Promise((resolve, reject) => {
        let timeout = Math.floor(Math.random() * 2000) + 1000;
        console.log("Timeout:" + timeout)
        setTimeout(efterTimeout, timeout);
        function efterTimeout() {
            let tal = Math.ceil(Math.random() * 2000);
            console.log("tal:" + tal)
            if (tal % 17 == 0) {
                resolve(tal);
            } else {
                reject(tal);
            }
        }
    })
}

//med then:
// function proevTreGange() {
//     let tal1 = gaetTalISyttenTabel();
//     let tal2 = gaetTalISyttenTabel();
//     let tal3 = gaetTalISyttenTabel();
//     let tal = Promise.any([tal1, tal2, tal3]);
//     tal.then(resultat => console.log("dette tal er i 17-tabellen:" + resultat)).catch(fejl => console.log("ingen tal duede"));
// }

// function proevNGange(n) {
//     let alleTal = [];
//     for (let i=0;i<n;i++) {
//         let tal = gaetTalISyttenTabel();
//         alleTal.push(tal);
//     }
//     let tal = Promise.any(alleTal);
//     tal.then(resultat => console.log("dette tal er i 17-tabellen:" + resultat)).catch(fejl => console.log("ingen tal duede"));
// }
// proevNGange(30);

//med await:
async function proevTreGange() {
    let tal1 = gaetTalISyttenTabel();
    let tal2 = gaetTalISyttenTabel();
    let tal3 = gaetTalISyttenTabel();
    try {
        console.log("Før await Promise.any")
        let resultat = await Promise.any([tal1, tal2, tal3]);
        console.log("dette tal er i 17-tabellen:" + resultat);
        return resultat
    } catch (error) {
        console.log("ingen tal duede")
    }
}
let resultat = proevTreGange()
resultat.then(console.log("resultat:" + resultat))
async function proevNGange(n) {
    let alleTal = [];
    for (let i=0;i<n;i++) {
        let tal = gaetTalISyttenTabel();
        alleTal.push(tal);
    }
    try {
        let resultat = await Promise.any(alleTal);
        console.log("dette tal er i 17-tabellen:" + resultat);
    } catch (error) {
        console.log("ingen tal duede")
    }
}
//proevNGange(30);
console.log("slut")
