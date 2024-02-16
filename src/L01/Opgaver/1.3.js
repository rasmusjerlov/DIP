
let list = [0, 4, 6, 8, 9, 12, 15, 16];

function binarySearch (arr, x) { 
    let indeks = -1;
    let low = 0;
    let high = arr.length - 1;
    while (indeks == -1 && low <= high) {
        let middle = Math.round((low + high) / 2);
        let k = arr[middle];
        if (k == x)
            indeks = middle;
        else {
            if (k > x) 
                high = middle - 1
             else
            low = middle + 1;
        }
    }
    return indeks
}
console.log(binarySearch(list, 8))