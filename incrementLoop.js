// In the case of addNums(), the critical operation here is the line, total += i;. Each individual addition operation may be fast but the amount of times it is executed is equal to the value of n. Doubling the value of n doubles the amount of add operations that are executed, thus doubling the runtime. This function has linear growth, or O(n) time complexity.


function addNums(n) {
    total = 0;

    for (let i = 1 ; i <= n ; i++) {
      total += i;
    }

    return total;
  }

let increment = 1000000
for (let n = increment ; n <= 10 * increment ; n += increment) {
  startTime = Date.now();
  addNums(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}
