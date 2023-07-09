class LinkListNode{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.length = 0
    }

    addToHead(val) {
        //create a ne Node
        const newNode = new LinkedListNode(val);
        //add this node as the value of the top reference
        newNode.next = this.head;
        // add this node to top reference
        this.head = newNode;
        //update length
        this.length++;
      }

    addToTail(val) {
        const newNode = new LinkListNode(val);
        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = newNode;
        }
        this.length++;
    }

    removeFromHead() {
        this.head = this.head.next;
        this.length--;

    }

    print() {
        let current = this.head;
        while(current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }
        console.log('NULL');
    }
}


class LLqueue{
    constructor(){
        this.LinkedList = new LinkedList();
    }

    enqueue(value) {
        this.LinkedList.addToTail(value)

    }
    dequeue() {
        const value = this.LinkedList.head.value;
        this.LinkedList.removeFromHead()

        return value;
    }
}



arrLL = new LLqueue();
// arrLL.enqueue(18);
// arrLL.LinkedList.print()
// arrLL.enqueue(42);
// arrLL.LinkedList.print()
// arrLL.enqueue(21);
// arrLL.LinkedList.print()
// arrLL.enqueue(5);
// arrLL.LinkedList.print()
// arrLL.dequeue()
// arrLL.dequeue()
// console.log('dequeue()')
// console.log('dequeue()')
// arrLL.LinkedList.print()

let start = Date.now();
let n = 1000;
for(let i = 0; i < n; i++) {
    arrLL.enqueue(n);
}
let end = Date.now();

console.log(`LinkedListQueue enqueue() time: ${end - start}`)

let startdeq = Date.now();
for(let i = 0; i < n; i++) {
    arrLL.dequeue();
}
let enddeq = Date.now();

console.log(`LinkedListQueue dequeue() time: ${enddeq - startdeq}`)
