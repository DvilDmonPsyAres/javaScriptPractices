function addToBack(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i+1);
    }
    return arr;
}

function addToFrontPreallocated(n) {
    //preallocate n slots of memory in array
    const arr = new Array(n);
    for(let i = 0; i < n; i++){
        arr[i] = i + 1;
    }
    return arr;
}

n = 10000000;

startTimeBack = Date.now()
arr = addToBack(n);
endTimeBack = Date.now()

startTimePre = Date.now()
arr = addToFrontPreallocated(n)
endTimePre = Date.now()

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log("addToFrontPreallocates(" + n + ") = " + (endTimePre - startTimePre) + "ms");
