// This calls the addNums() function n times. Since addNums is O(n), this results in a function that does n things n times, for an overall time complexity of n * n, or O(n2). This is known as quadratic growth.


function addManyNums(n) {

    let total = 0;

    for (let i = 0 ; i < n ; i++) {
      total += addNums(i);
    }

    return total;
  }

  function addNums(n) {
    let total = 0
    for(let i = 1; i < n; i++) {
        total +=i
    }
    return total;
}

let newArr = []
let increment = 10000;

for(let i = increment; i < 10 * increment; i += increment) {
    let startTime=Date.now();
    newArr.push(addManyNums(i))
    let endTime=Date.now();
    console.log(`${endTime - startTime}`);
}

console.log(newArr);
