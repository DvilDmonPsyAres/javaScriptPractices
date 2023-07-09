function addToBack(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i+3);
    }
    return arr;
}

function addNewSpace(array, newEmptySpaces) {
    //preallocate n slots of memory in array
    const newArr = new Array(array.length + newEmptySpaces);
    for(let i = array.length; i >= 0; i--){
        newArr[i] = array[i];
    }
    return newArr;
}

n = 10000000;

startTimeBack = Date.now()
arr = addToBack(n);
endTimeBack = Date.now()

startTimePre = Date.now()
arr2 = addNewSpace(arr, 10)
endTimePre = Date.now()

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log("addnewSpace(" + n + ") = " + (endTimePre - startTimePre) + "ms");
console.log(arr.length)
console.log(arr2.length)
console.log(arr2[arr2.length-1])
