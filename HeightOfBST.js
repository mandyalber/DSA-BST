const BinarySearchTree = require('./BinarySearchTree')

function findHeight(tree) {
    //if empty tree return 0
    if (tree === null) {
        return 0
    }
    else {
        //get max depth of left subtree recursively
        let leftHeight = findHeight(tree.left)
        //get max depth of right subtree recursively
        let rightHeight = findHeight(tree.right)
        //get max of max depths, add 1 for current node
        if (leftHeight > rightHeight) {
            return leftHeight + 1
        }
        else {
            return rightHeight + 1
        }
    }
}

const nums = [3, 1, 4, 6, 9, 2, 5, 7]
const letters = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N']

const BST = new BinarySearchTree()
nums.forEach(num => BST.insert(num))

const BST2 = new BinarySearchTree()
letters.forEach(letter => BST2.insert(letter))

console.log(findHeight(BST))//5
console.log(findHeight(BST2))//7