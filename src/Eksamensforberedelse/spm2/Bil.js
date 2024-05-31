class Bil {
    static count = 0;

    constructor(bilmærke, pris) {
        if (!bilmærke || typeof bilmærke !== 'string' || !pris || typeof pris !== 'number') {
            throw new Error ('Bilmærke er tom')
        }
        // if (!bilmærke.isNan()) {
        //     throw new Error ('Bilmærket skal være af typen String')
        // }
        this.#bilmærke = bilmærke; 
        this.#pris = pris    
        Bil.count++;
    }
    #bilmærke;
    #pris;
    
    toString() {
        return ' Bil: ' + this.#bilmærke;
    }
}

class Varevogn extends Bil {
    constructor(bilmærke, pris, lastevne) {
        if (lastevne <= 0) {
            throw new Error ('Varevognen lastevne er ikke angivet.')
        }
        super(bilmærke, pris);
        this.lastevne = lastevne;
    }
    toString() {
        return super.toString() + ', lastevnen er: ' + this.lastevne + ' kg.'
        }
}

    let bil1 = new Bil('Ford', 22000);
    let bil2 = new Bil('Audi', 35000);
    let bil3 = new Bil('VW', 28000);

    let vv1 = new Varevogn('Ford', 38000, 300);
    let vv2 = new Varevogn('Mercedes', 42000, 800);

    let biler = [bil1, bil2, bil3, vv1, vv2];

    for (let bil of biler) {
        console.log(bil.toString());
    }
    
    for (bil of biler)
    console.log(bil);


    console.log('Antal af biler: ' + Bil.count)