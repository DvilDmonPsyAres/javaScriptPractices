class LinkedListNode {
    construcctor(value, next) {
        this.value = value;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        //dafault to empty
        this.head = null;
        this.tail = null
    }

    addToHead(value) {
        this.head = new LinkedListNode(value, this.head);

        // Must account for the tail pointer in an empty list
        if (!this.tail) this.tail = this.head;
    }

    removeFromHead() {
        if (this.head) this.head = this.head.next;

        if (this.head === null) this.tail = null;
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

class DoublyLinkedListNode {
    constructor(value, previous, next) {
      this.value = value;
      this.previous = previous;
      this.next = next;
    }
  }

node3 = new LinkedListNode(37, null);
node2 = new LinkedListNode(99, node3);
node1 = new LinkedListNode(12, node2);

ll = new LinkedList();
ll.addToHead(node1)
ll.addToHead(node2)
ll.addToHead(node3)
ll.print();
