class Stack {
    constructor() {
        this.data = []
    }
    push(value) {
        this.data.push(value);
    }
    pop() {
        return this.data.pop()
    }
    size(){
        return this.data.length;
    }
}
