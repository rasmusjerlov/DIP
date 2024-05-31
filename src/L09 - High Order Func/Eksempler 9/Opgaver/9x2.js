import * as lib from './Opgave 2.3.js'

function compareSort(compFunction) {
    let resultat = function(list) {
        return list.sort(compare);
    }
}

let lenSort = compareSort(lib.compareLen);
let ignoreCaseSort = compareSort(lib.compareIgnoreCase);

let list1 = ['abe', 'KATTE', 'abekat', 'ABE'];
console.log(lenSort(list1))
console.log(ignoreCaseSort(list1))

