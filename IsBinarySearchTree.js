const BinarySearchTree = require('./BinarySearchTree')

function isBST(tree, l = null, r = null) {
    //base condition
    if (!tree.right && !tree.left) {
        return true
    }
    //if left child exists, check data <= root
    if (tree.left) {
        if (tree.left.value >= tree.value) {
            return false
        }
        //check recursively for every node
        isBST(tree.left)
    }
    //if right child exists, check data >= root
    if (tree.right) {
        if (tree.right.value <= tree.value) {
            return false
        }
        //check recursively for every node
        isBST(tree.right)
    }
    return true
}

const nums = [3, 1, 4, 6, 9, 2, 5, 7]
const BST = new BinarySearchTree()
nums.forEach(num => BST.insert(num))

const dupes = [2, 2, 3, 2, 3, 4, 3, 2, 1]
const BST2 = new BinarySearchTree()
dupes.forEach(int => BST2.insert(int, int))

console.log(isBST(BST))//true
console.log(isBST(BST2))//false

