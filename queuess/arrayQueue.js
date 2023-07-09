
class ArrayQueue {
    constructor() {
        this.data =[];
    }

    enqueue(value){
        this.data.push(value);
    }

    dequeue(){
        return this.data.shift()
    }
}

const que = new ArrayQueue();
let n = 1000;

let start = Date.now()

for(let i = 0; i < n; i++) {
    que.enqueue(i);
}

let end = Date.now()

console.log(`ArrayQueue queue(): ${end - start}`)


let dequeuestart = Date.now()

for(let i = 0; i < n; i++) {
    que.dequeue();
}

let dequeueend = Date.now()

console.log(`Array dequeue(): ${dequeueend - dequeuestart}`)
