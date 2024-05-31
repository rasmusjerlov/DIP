'use strict';

let persons = [
    {
        firstName: 'Yazeed',
        lastName: 'Hussein',
        age: 25
    },
    {
        firstName: 'Sam',
        lastName: 'Gamwise',
        age: 30
    },
    {
        firstName: 'Bill',
        lastName: 'Bailey',
        age: 20
    },
    {
        firstName: 'Baby',
        lastName: 'Driver',
        age: 16
    }
];

function MyMap (list, mapper) {
    let retur = []
    for (let element of list) {
        retur.push(mapper(element));
    }
    return retur;
}
let aldre = MyMap(Person, p => p.age)
aldre.forEach(a => console.log(a));

