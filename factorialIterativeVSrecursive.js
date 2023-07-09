function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n-1);
}

function factorialIterative(n) {
    let total = 1;

    for(let i = n; i > 0; i--) {
        total *= i;
    }

    return total;
}

n = 10;

let startFactorial = Date.now()
console.log(factorial(n))
let endFactorial = Date.now()

let startFactorialIterative = Date.now()
console.log(factorialIterative(n))
let endFactorialIterative = Date.now()

console.log(`Recursive factorial implementation time: ${endFactorial - startFactorial}`);
console.log(`Iterative Factorial implementation time: ${endFactorialIterative - startFactorialIterative}`);
