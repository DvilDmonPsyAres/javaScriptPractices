function addNums(n) {
    let Arr = [];
    total = 0;
    for(let i = 0; i <= n; i++) {
        total +=1;
        Arr.push(i)
    }
    console.log(Arr);
    return total;
}

let startTime = Date.now();
console.log(addNums(1000000));
let endTime = Date.now();

console.log(startTime);
console.log(endTime);
console.log(endTime - startTime);
console.log(`Runtime: ${endTime - startTime}ms`);
