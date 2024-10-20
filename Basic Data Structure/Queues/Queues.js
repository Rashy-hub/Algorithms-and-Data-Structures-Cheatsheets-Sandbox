//[5,4,3,2]
class Queue {
    constructor() {
        this.items = [] //initial empty array that will contain our queue
    }
    //[5,4,3,2] item will be inserted in the begining whi shifting others elemnts
    enqueue(item) {
        return this.items.unshift(item)
    }

    dequeue() {
        if (this.getSize() === 0) return `Queue was empty`
        return this.items.pop()
    }

    peek() {
        return this.items[this.getSize() - 1]
    }

    isEmpty() {
        return this.getSize() == 0
    }

    getSize() {
        return this.items.length
    }
    printQueue() {
        let output = 'Rear->'
        for (const item of this.items) {
            output += `[${item}]->`
            if (this.items.indexOf(item) == this.getSize() - 1)
                output += `Front`
        }
        console.log(output)
    }
}

const myQueue = new Queue()
myQueue.enqueue(5)
myQueue.enqueue(12)
myQueue.enqueue(98)
console.log(myQueue.peek())
myQueue.printQueue() //output :Rear->[98]->[12]->[5]->Front
myQueue.dequeue()
myQueue.printQueue() // output : Rear->[98]->[12]->Front
