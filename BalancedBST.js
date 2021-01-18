const BinarySearchTree = require('./BinarySearchTree')

function balancedBST(tree) {
    const maxHeight = (node) => {
        if (node === null) {
            return 0
        }
        return 1 + Math.max(maxHeight(node.left), maxHeight(node.right))
    }
    const minHeight = (node) => {
        if (node === null) {
            return 0
        }
        return 1 + Math.min(minHeight(node.left), minHeight(node.right))
    }
    if (tree === null) {
        return true
    }
    return maxHeight(tree) - minHeight(tree) <= 1
}

const nums = [3, 1, 4, 6, 9, 2, 5, 7]
const BST = new BinarySearchTree()
nums.forEach(num => BST.insert(num))

const nums2 = [50, 25, 75, 12, 100, 60];
const BST2 = new BinarySearchTree();
nums2.forEach(int => BST2.insert(int, int));

console.log(balancedBST(BST))//false
console.log(balancedBST(BST2))//true
