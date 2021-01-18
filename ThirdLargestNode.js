const BinarySearchTree = require('./BinarySearchTree')

function thirdLargest(tree) {
    let results = []
    const orderNodes = (node) => {
        if (node.left) {
            orderNodes(node.left)
        }
        results.push(node.key)

        if (node.right) {
            orderNodes(node.right)
        }
    }
    orderNodes(tree)

    if (results.length >= 3){
        return results[results.length - 3]
    }
    else {
        return 'tree has less than 3 nodes'
    } 
}

const nums = [3, 1, 4, 6, 9, 2, 5, 7]
const letters = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N']

const BST = new BinarySearchTree()
nums.forEach(num => BST.insert(num))

const BST2 = new BinarySearchTree()
letters.forEach(letter => BST2.insert(letter))

console.log(thirdLargest(BST))//6
console.log(thirdLargest(BST2))//T