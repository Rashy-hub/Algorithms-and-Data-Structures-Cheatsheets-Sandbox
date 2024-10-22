class Graph {
    constructor() {
        this.adjacencyList = {} //an js object is a good choice to store the graph
        /*example : 
            {
                A: [ 'B', 'C', 'C' ],
                B: [ 'A', 'D', 'D' ],
                C: [ 'A', 'A' ],
                D: [ 'B', 'B' ]
            }
        */
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [] // basicaly the parameter (vertex) will be the name of a key for the object
        }
    }

    // create an link between two nodes
    addEdge(vertex1, vertex2) {
        //check first they exists
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1) // Undirected graph , less complex
        }
    }

    // Remove a vertex and all associated edges
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v) => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (v) => v !== vertex1
        )
    }

    // Check if there is an edge between two vertices
    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1].includes(vertex2)
    }

    // Print the graph
    printGraph() {
        for (const vertex in this.adjacencyList) {
            const neighbors = this.adjacencyList[vertex]
            console.log(`${vertex} -> ${neighbors.join(', ')}`)
        }
    }
}

// Example usage:
const myGraph = new Graph()
myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')
myGraph.addVertex('D')

myGraph.addEdge('A', 'B')
myGraph.addEdge('A', 'C')
myGraph.addEdge('B', 'D')
myGraph.addEdge('C', 'A')
myGraph.addEdge('D', 'B')
myGraph.printGraph()

/* Output:{
    A: [ 'B', 'C', 'C' ],
    B: [ 'A', 'D', 'D' ],
    C: [ 'A', 'A' ],
    D: [ 'B', 'B' ]
  }
*/
