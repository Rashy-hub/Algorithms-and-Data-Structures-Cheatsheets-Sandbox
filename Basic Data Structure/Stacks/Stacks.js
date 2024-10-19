class Stack {
    constructor() {
        // Stack class is kind of a wrapper of an array (that already behave like a stack) with extra methods for more control
        this.items = []
    }

    // same as push of arrays
    push(element) {
        this.items.push(element)
    }

    // same as pop of built in arrays
    pop() {
        //but first check if stack is not empty
        if (this.isEmpty()) return `stack was empty`
        this.items.pop()
    }

    // return the top element without removing it
    peek() {
        return this.items[this.getSize() - 1]
    }

    // check if the stack is empty
    isEmpty() {
        if (this.items.length === 0) return true
        return false
    }

    // return the number of elements in the stack (size)
    getSize() {
        return this.items.length
    }

    // print the contents of the stack
    printStack() {
        let output = 'TOP->'
        for (const item of this.items) {
            if (this.items.indexOf(item) == this.getSize() - 1)
                output += `[${item}]`
            else output += `[${item}]->`
        }
        console.log(output)
    }
}

const myStack = new Stack()
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
myStack.printStack()
console.log('Top element is:', myStack.peek())
myStack.pop()
myStack.printStack()
console.log('Stack size is:', myStack.getSize())
