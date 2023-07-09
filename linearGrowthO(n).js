//     <-- linearGrowth O(n) -->
let newArr = [];
function addNums(n) {
    let total = 0
    for(let i = 1; i < n; i++) {
        total +=i
    }
    newArr.push(total);
}
let increment = 10058526

for(let i = increment; i <= 20 * increment; i += increment) {
    let startTime = Date.now()
    addNums(i)
    let endTime = Date.now()
    console.log(`${endTime -startTime}`)
}
console.log(newArr);
