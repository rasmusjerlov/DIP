class Bil {
    constructor(antalHjul) {
        this.#navn = "";
        this.antalHjul = antalHjul;
    }
    #navn;
    test = 2;
    koer = function(fart) {
        console.log("Kører " + fart + " km/t på " + this.antalHjul + " hjul");
    }
    // koer(fart) {
    //     console.log("Kører " + fart + " km/t på " + this.antalHjul + " hjul");
    // }
}

class XBil extends Bil {
    constructor(antalHjul, testcrap) {
        super(antalHjul)
    }
    test2 = function(){antalHjul++}
}

let minBil = new Bil(4);
minBil.koer(43);
console.log(Object.getPrototypeOf(minBil) === Bil.prototype)
console.log(minBil.__proto__ === Bil.prototype)

Bil.prototype.Farve = "Blå";
console.log(minBil.Farve);
minBil.Farve = "rød";
console.log(minBil.Farve);

minBil.__proto__.koer = function() {
    console.log("Dette er den nye koer function");
}

Bil.prototype.ToString = function() {
    return "Hvor går det langsomt";
}
console.log(minBil.ToString());

minBil.ToString = function() {
    return "Det går stærkt";
}
console.log(minBil.ToString());

let xBil = new XBil();
console.log(Object.getPrototypeOf(xBil) === XBil.prototype)
console.log(xBil.__proto__ === XBil.prototype)
// console.log(typeof Object.getPrototypeOf(xBil))

for(let m in xBil) {
    console.log(m + ' ' + typeof xBil[m])
}


function Point2D(x, y) {
    this.x = x;
    this.y = y;
  }

console.log(Point2D.prototype)
