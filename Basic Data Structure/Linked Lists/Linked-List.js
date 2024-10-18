class NodeElement {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    //ex: Head -> [ 1 ] -> [ 2 ] -> [ 3 ] -> [ 4 ] -> null
    constructor() {
        // first element of our linked list , it is our baby embryo list element destined to grow (or shrink sometimes life sucks too):D
        this.head = null
        // size tracker
        this.size = 0
    }

    add(data) {
        let newNode = new NodeElement(data)
        newNode.next = null
        if (this.head === null) {
            this.head = newNode
        }
        //if the head element is not null ( means that the list contains already nodes )
        else {
            let currentNode = this.head
            //go trough the list using the next properties until we reach the last node (next points to null)
            while (currentNode.next !== null) {
                //go to the next node
                currentNode = currentNode.next
            }
            //current node is the last so far
            currentNode.next = newNode
        }
        // when adding a node always increment size
        this.size++
    }
    removeAt(position) {
        let currentPosition = 0
        let previousNode = null
        if (this.head === null || position >= this.size || position < 0) {
            return false
        } else {
            let currentNode = this.head

            while (currentNode !== null) {
                if (position === currentPosition) {
                    // Element to remove found
                    if (previousNode === null) {
                        this.head = currentNode.next
                    } else {
                        previousNode.next = currentNode.next
                    }
                    this.size--
                    return true // Return true if removal is successful
                }

                currentPosition++
                previousNode = currentNode
                currentNode = currentNode.next
            }
        }
        return false
    }
    remove(data) {
        let currentNode = this.head
        let previousNode = null

        // Traverse to find the node to remove
        while (currentNode !== null) {
            if (currentNode.value === data) {
                //cas limit first node
                if (previousNode === null) {
                    this.head = currentNode.next
                } else {
                    previousNode.next = currentNode.next
                    return true
                }
                //effectively removing node
            }

            previousNode = currentNode
            currentNode = currentNode.next
        }

        return false
    }

    list() {
        let currentNode = this.head
        let output = ''
        //go trough the list using the next properties until we reach the last node (next points to null)
        while (currentNode.next !== null) {
            //go to the next node
            output += `[${currentNode.value}]->`
            currentNode = currentNode.next
        }
        output += `[${currentNode.value}]->null`
        console.log(output)
    }

    getSize() {
        return this.size
    }
}

const myLinkedList = new LinkedList()
myLinkedList.add(2)
myLinkedList.add(5)
myLinkedList.add(4)
myLinkedList.add(8)
console.log('linked list size ' + myLinkedList.list())
myLinkedList.removeAt(0) // remove node at index position
console.log(myLinkedList.getSize())
myLinkedList.list()
myLinkedList.remove(8)
myLinkedList.list()
