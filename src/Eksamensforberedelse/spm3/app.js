function getTalSytten(nr) {
    return new Promise(function (resolve, reject) {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            let type = Math.trunc(Math.random() * 2001);
            console.log(type);
            if (type % 17 === 0) resolve(`${nr} OK!`);
            else reject(`${nr} Ikke OK!`);
        }, delay);
        console.log('Delay: ' + delay / 1000 + ' sekunder');
    });
}

getTalSytten(1)
    .then(resultat => console.log('Resultat: ' + resultat))
    .catch(fejl => console.log('Fejl/exception: ' + fejl));

function provngange(antal) {
    return new Promise(function (resolve, reject) {
        let antalForsøg = 0;
        function forsøgTaget() {
            getTalSytten(antalForsøg++)
            .then (resolve)
            .catch(() => {
                antalForsøg++;
                if (antalForsøg < antal) {
                    forsøgTaget();
                } else {
                    reject (`Ingen af de ${antal} forsøg gik op i 17`);
                }
            });
        }
        forsøgTaget();
    });
}

provngange(20)
    .then(resultat => console.log('Resultat: ' + resultat))
    .catch(fejl => console.log('Fejl/exception: ' + fejl));