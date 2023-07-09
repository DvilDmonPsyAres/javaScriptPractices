function addToBack(n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(i+1)
    }
}

function addToFront(n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr.unshift(n-1)
    }
}

n = 100000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimeFront = Date.now();
arr = addToFront(n);
endTimeFront = Date.now();

console.log(`add to Back ${n}: ${endTimeBack - startTimeBack} ms`)

console.log(`add to Back ${n}: ${endTimeFront - startTimeFront} ms`)
