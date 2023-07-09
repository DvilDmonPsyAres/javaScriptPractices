// console.time("Timer1");

// console.timeLog("Timer1");

// console.timeEnd("Timer1");

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

console.time("addNums");
console.log(addNums(1000000));
console.timeEnd("addNums");
