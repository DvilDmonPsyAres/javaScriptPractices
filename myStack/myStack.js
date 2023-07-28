class myStack {
    constructor() {
        this.data = [];
        this.minStack = [];
    }

    push(n) {
        if(this.minStack.length === 0) {
            this.minStack.push(n)
            this.data.push(n);
            return this.data.length;
        }

        if(n < this.minStack[this.minStack.length-1]) {
            this.minStack.push(n);
            this.data.push(n);
        } else {
            this.data.push(n);
            this.minStack.push(this.minStack[this.minStack.length-1])
        }
    }

    pop() {
        this.minStack.pop();
        return this.data.pop();
    }

    min() {
        return this.minStack[this.minStack.length-1];
    }

    top() {
        return this.data[this.data.length-1]
    }
}

const stack = new myStack()
stack.push(2)
stack.push(4)
stack.push(5)
x = stack.pop()
console.log(stack)
console.log(x)
console.log(`current min: ${stack.min()}`)
console.log(`current top: ${stack.top()}`)
