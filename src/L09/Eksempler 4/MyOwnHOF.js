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
    }

];

function getIndices(list, filter) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (filter(list[i])) {
            result.push(i);
        }
    }
    return result;
}

let indices1 = getIndices(persons, (person) => person.age <= 25);
indices1.forEach(element => { console.log(element) });

console.log("Sams in: ");
let indices2 = getIndices(persons, namedSam);

function namedSam(person) {
    if (person.firstName == 'Sam') {
        return true;
    } else {
        return false;
    }
}