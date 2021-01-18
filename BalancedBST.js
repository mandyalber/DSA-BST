const BinarySearchTree = require('./BinarySearchTree')

function balancedBST(tree) {
   
}

const nums = [3, 1, 4, 6, 9, 2, 5, 7]
const letters = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N']

const BST = new BinarySearchTree()
nums.forEach(num => BST.insert(num))

const BST2 = new BinarySearchTree()
letters.forEach(letter => BST2.insert(letter))

console.log(balancedBST(BST))//
console.log(balancedBST(BST2))//