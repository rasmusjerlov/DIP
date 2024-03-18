let persons = [
    { navn: 'Michael', alder: 32, mobil: 18293212}, 
    { navn: 'Torben', alder: 30, mobil: 84129512}, 
    { navn: 'Knud', alder: 39, mobil: 23941232}
]

//Find mobile number
let findMobil = persons.filter((p) => p.mobil == 18293212);
console.log(findMobil[0].navn);

//Find lowest age
console.log(persons.map((p) => p.alder).reduce((total, alder) => Math.min(alder, total)));

//ID
persons.forEach((p, index) => 
p.id = index + 1);
console.log(persons);

//Sort
console.log(persons.map((p) => p.navn).sort().reduce((total, n) => total + ', ' + n));
