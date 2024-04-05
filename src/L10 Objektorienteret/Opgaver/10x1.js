function animalConstr(name, age) {
    this.name = name;
    this.age = age;
    this.canRun = () => {
        console.log("This animal can run!")
    }
}

let a1 = new animalConstr("TullyHund", 23);
a1.canRun();


function humanConstr(name, age, money) {
    animalConstr.call(this, name, age);
    this.money = money;
    this.canEarn = () => {
        console.log("This human can earn")
    }
}

let h1 = new humanConstr("Rasmus", 24, 0)
let h2 = new humanConstr("Tully", 23, 10)

humanConstr.prototype.__proto__ = animalConstr.prototype;
h2.canRun() = 

console.log(h1);
console.log(h2);

h1.canEarn();
console.log(a1.name + a1.age);
h1.canRun();
//a1.canEarn();

console.log("navn: " + h1.name);