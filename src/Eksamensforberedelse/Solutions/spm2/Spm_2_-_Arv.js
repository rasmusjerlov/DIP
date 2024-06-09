
//Lav en klasse Bil. Den skal have bilmaerke og pris som private properties og en toString() metode med en
//fornuftig implementation.

//Den skal have en constructor, der modtager disse to værdier og kaster en exception, hvis de ikke er angivet
//eller er af forkert type.
class bil {
    #bilmaerke;
    #pris;
    static antalBiler = 0;

    constructor(bilmaerke, pris) {
        if(!bilmaerke || typeof bilmaerke !== 'string' || !pris || typeof pris !== 'number') {
            throw new Error('Forkert type eller manglende værdier')
        }
        this.#bilmaerke = bilmaerke;
        this.#pris = pris;
        bil.antalBiler++;
    }

    toString() {
        return `Bil: ${this.#bilmaerke}, Pris: ${this.#pris}`;
    }

    get bilmaerke() {
        return this.#bilmaerke;
    }

    get pris() {
        return this.#pris;
    }

    static getAntalBiler() {
        return bil.antalBiler;
    }
}

// Lav en subklasse Varevogn med lasteevne (i kg) som ekstra property og en modificeret toString() metode
// samt en constructor, der kaster en exception, hvis lasteevne ikke er angivet.

class Varevogn extends bil {
    #lasteevne;

    constructor(bilmaerke, pris, lasteevne) {
        super(bilmaerke, pris);
        if (!lasteevne || typeof lasteevne !== 'number') {
            throw new Error('Forkert type eller manglende værdier for lasteevne');
        }
        this.#lasteevne = lasteevne;
    }

    toString() {
        //return `${super.toString()}, Lasteevne: ${this.#lasteevne});
        return `Varevogn: ${this.bilmaerke}, Pris: ${this.pris}, Lasteevne: ${this.#lasteevne}`;
    }
}

// Test med et array af forskellige bilobjekter.
let biler = [new bil("Audi", 1000),
            new Varevogn("Ford", 500, 1500),
            new bil("Kia", 750)];

biler.forEach((bil) => console.log(bil.toString()));

// Modificer Bil, så antal oprettede biler gemmes i en property på Bil.
console.log(`Antal oprettede biler: ${bil.getAntalBiler()}`);

// Gør rede for arv i JavaScript.
/*
Arv gør det muligt for en subklasse at tage nogle attributter fra en superklasse.
I dette eksempel arver varevogn bilmaerke og pris.
super() bruges til at kalde constructoren fra superklassen.
Arv gør det også muligt at arve metoder, som mindsker redundant kode.
*/