// HashTable class implementation

class HashTable {
    constructor(size = 50) {
        this.table = new Array(size) // Init the table property , is will contain key values as an array of arrays
        this.size = size // to keep track of the size ?
    }

    // This hash method is the simplest way to generate unique index from a key value
    hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) // Sum of ASCII values of characters in key
        }
        return hash % this.size // Modulo to fit size (0-size)
    }

    insert(key, value) {
        const index = this.hash(key) //first hash the key
        if (!this.table[index]) {
            //create a new empty array if no previous entry at that index
            this.table[index] = []
        }
        // Add key-value pair to the list (we use chaining in our case in order to treat future collision)
        this.table[index].push([key, value])
    }

    get(key) {
        const index = this.hash(key) // it should return the same output as when we insert
        if (!this.table[index]) return undefined // If no key exists at that index

        //  (chaining check ; in the case of mutliples entries for the same key)
        for (const [k, v] of this.table[index]) {
            if (k === key) {
                return v
            }
        }
        return undefined
    }

    // Remove method to delete a key-value pair
    remove(key) {
        const index = this.hash(key)
        if (!this.table[index]) return false

        // once again iterate in the chained sub array, find corresponding key and delete
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1) //splice will directly change the table
                return true
            }
        }
        return false
    }

    // Print method to visualize the hash table
    printTable() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(
                    `index ${i} has (chained) [key,value] pair of `,
                    this.table[i]
                ) // Print index and its key-value pairs
            }
        }
    }
}

// Example usage of HashTable
const myHashTable = new HashTable(10)
myHashTable.insert('Alice', '+32498657489')
myHashTable.insert('Bob', '+324599877')
myHashTable.insert('Charlie', '+3264548765')

console.log(myHashTable.get('Alice')) // Output: +32498657489
console.log(myHashTable.get('Bob')) // Output: +324599877
//myHashTable.remove('Bob') // Remove Bob from the hash table
console.log(myHashTable.get('Bob')) // Output: undefined

myHashTable.printTable()
