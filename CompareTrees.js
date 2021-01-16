const BinarySearchTree = require('./BinarySearchTree')

const nums = [3,1,4,6,9,2,5,7]
const letters = ['E','A','S','Y','Q','U','E','S','T','I','O','N']

const BST = new BinarySearchTree()
nums.forEach(num => BST.insert(num))
console.log(BST)
BST.remove(3)
console.log(BST)

const BST2 = new BinarySearchTree()
letters.forEach(letter => BST2.insert(letter))
console.log(BST2)
BST2.remove('E')
console.log(BST2)