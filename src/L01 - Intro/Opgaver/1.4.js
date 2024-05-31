function totalFletning(arr1, arr2) {
    let emptyList = [];
    let a = 0;
    let b = 0;
    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] < arr2[b]) {
            emptyList.push(arr1[a]);
            a++;
        }
        else {
            emptyList.push(arr2[b]);
            b++;
        }
    }
    while (a < arr1.length) {
        emptyList.push(arr1[a]);
        a++;
    }
    
    while (b < arr2.length) {
        emptyList.push(arr2[b]);
        b++;
        return emptyList;
    }
}
let list1 = [3, 7, 9, 9]
let list2 = [1, 5, 6, 10]

console.log(totalFletning(list1, list2))


