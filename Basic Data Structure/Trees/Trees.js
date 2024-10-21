/*```markdown
       root
       /  \
    parent leaf
     / \

child 
```*/

class TreeNode {
    constructor(value) {
        this.value = value
        this.right = null //for child greater or equal than parent
        this.left = null //for child lesser than parent
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    }

    insertNode(value) {
        //first we create the node
        let currentNode = new TreeNode(value)
        //case where node is the first one
        if (!this.root) {
            //is null
            this.root = currentNode
        }
        //generic cases , should be done using recurive function
        else {
            this.#recursiveInsert(this.root, currentNode)
        }
    }
    //this private method is our recursive way to insert a node we start from root and evaluate if newNode.value is less or great that parent.value
    #recursiveInsert(parent, newNode) {
        //Classic BTS here
        //if less we first check if parent.left is not null if it is set parent.left=newNode , if not we call again recursiveInsert the parent.left being the parent
        if (newNode.value < parent.value) {
            if (!parent.left) {
                parent.left = newNode
                return
            } else {
                this.#recursiveInsert(parent.left, newNode)
            }
        } else if (newNode.value >= parent.value) {
            if (!parent.right) {
                parent.right = newNode
                return
            } else {
                this.#recursiveInsert(parent.right, newNode)
            }
        }
    }

    #recursiveSearchNode(parent, targetValue) {
        if (!parent)
            return `value not found in the tree` // in the case where it has no child , it means we did not find the value
        else if (parent.value == targetValue)
            return parent //we found the value we return the node
        else if (targetValue < parent.value)
            return this.#recursiveSearchNode(parent.left, targetValue)
        else if (targetValue >= parent.value)
            return this.#recursiveSearchNode(parent.right, targetValue)
    }

    searchNode(value) {
        console.log(`Searching for value :${value}`)
        //again we use recursivity to search this time a value (not Node)
        //  console.log(this.root)
        return this.#recursiveSearchNode(this.root, value)
    }
    displayTree() {
        if (!this.root) {
            console.log('The tree is empty.')
            return
        }

        console.log('Tree Structure:')
        console.log('├── indicates a branch that has a sibling (left child).')
        console.log(
            '└── indicates the last child on a branch (rightmost child).'
        )
        console.log()

        const buildTreeString = (node, prefix = '', isLeft = true) => {
            if (node) {
                const result = []
                result.push(prefix + (isLeft ? '├── ' : '└── ') + node.value)
                const childPrefix = prefix + (isLeft ? '│   ' : '    ')
                const leftChild = node.left
                    ? buildTreeString(node.left, childPrefix, true)
                    : []
                const rightChild = node.right
                    ? buildTreeString(node.right, childPrefix, false)
                    : []
                return result.concat(leftChild, rightChild)
            }
            return []
        }

        const treeString = buildTreeString(this.root).join('\n')
        console.log(treeString)
    }
}

let myTree = new BinaryTree()
myTree.insertNode(5)
myTree.insertNode(10)
myTree.insertNode(24)
myTree.insertNode(32)
myTree.insertNode(2)
console.log(myTree.searchNode(2))
console.log(myTree.searchNode(65))
myTree.displayTree()
