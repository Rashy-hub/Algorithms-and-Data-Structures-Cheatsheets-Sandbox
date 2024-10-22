class MySet {
    constructor() {
        this.items = {} // Object to hold the unique elements
    }

    // Add a value to the set if it's not already present
    add(value) {
        if (!this.has(value)) {
            this.items[value] = value
        }
    }

    // Delete a value from the set
    delete(value) {
        if (this.has(value)) {
            delete this.items[value]
        }
    }

    // Check if a value is in the set
    has(value) {
        return this.items.hasOwnProperty(value)
    }

    // Union of two sets
    union(otherSet) {
        const unionSet = new MySet()
        for (let value in this.items) {
            unionSet.add(value)
        }
        for (let value in otherSet.items) {
            unionSet.add(value)
        }
        return unionSet
    }

    // Intersection of two sets
    intersection(otherSet) {
        const intersectionSet = new MySet()
        for (let value in this.items) {
            if (otherSet.has(value)) {
                intersectionSet.add(value)
            }
        }
        return intersectionSet
    }

    // Difference between two sets
    difference(otherSet) {
        const differenceSet = new MySet()
        for (let value in this.items) {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        }
        return differenceSet
    }

    // Print the set elements
    printSet() {
        console.log(Object.values(this.items).join(', '))
    }
}

// Example usage:
const setA = new MySet()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new MySet()
setB.add(2)
setB.add(3)
setB.add(4)

const unionSet = setA.union(setB)
unionSet.printSet() // Output: 1, 2, 3, 4

const intersectionSet = setA.intersection(setB)
intersectionSet.printSet() // Output: 2, 3
