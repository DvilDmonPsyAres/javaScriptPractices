class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToHead(node) {
        //create a new node with the given value
        const newNode = new LinkedListNode(node, null);

        // set the node`s next pointer to the list`s current head pointer
        newNode.next = this.head;

        //set the list head to point to the new link
        this.head = newNode
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

class LinkedListNode {
    construcctor(value, next) {
        this.value = value;
        this.next = next;
    }
}



node3 = new LinkedListNode(37, null);
node2 = new LinkedListNode(99, node3);
node1 = new LinkedListNode(12, node2);

ll = new LinkedList();
ll.addToHead(96)
ll.addToHead(86)
ll.addToHead(76)
ll.print();
