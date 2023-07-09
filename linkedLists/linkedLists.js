class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// let node1 = new Node("Alanbrown");
// console.log(node1);

class LinkedList {
    construcctor() {
        this.head = null //means woitout null its an empty list
        this.size = 0;
    }

    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    //insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        //if empty make head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }
    //insert at index
    insertAt(data, index) {
        //manage edge cases:
        //if index out of range
        if(index>0 && index > this.size) {
            return;
        }
        //if first index
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;

        //set current to first;
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; //node befor the index
            count++;
            current = current.next; // node after
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
    //get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count === index) {
                return current.data;
            }
            count++;
            current = current.next
        }

        return null;
    }
    //remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        //remove first
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next
        }
        this.size--;
    }
    //clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    //print list data
    printListData() {
        //variable representing the current node
        let current = this.head;
        //loop trough all nodes
        while(current) {
            console.log(current.data);
            //set pointer to the next set of data
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst("Alan");
ll.insertFirst("Eduardo");
ll.insertFirst("EsLan");
ll.insertFirst("Garza");
ll.insertLast("54");
ll.insertLast("42");
ll.insertAt("INSERT AT: 3", 3)
console.log(ll);
ll.printListData();
console.log(`At index 4: ${ll.getAt(4)}`);
console.log(`At index 3: ${ll.getAt(3)}`);
console.log(`At index 2: ${ll.getAt(2)}`);
console.log(`Removing at index 3: `);
ll.removeAt(3);
ll.printListData();
console.log(`clearing data: `)
ll.clearList();
console.log(`printing data again: `)
ll.printListData();
