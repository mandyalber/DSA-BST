
function isSameBST(array1, array2) {
    //1) Compare sizes of two arrays. If not same, return false.
    if (array1.length !== array2.length) {
        return false
    }
    if (array1.length === 0) {
        return true
    }
    //2) Compare first values of two arrays. If not same, return false.
    if (array1[0] !== array2[0]) {
        return false
    }
    //3) Create two lists from each given array such that the first list contains values smaller than first item of the corresponding array. And second list contains greater values.
    let leftArray1 = array1.filter(i => i < array1[0])
    let rightArray1 = array1.filter(i => i > array1[0])

    let leftArray2 = array2.filter(i=>i<array2[0])
    let rightArray2 = array2.filter(i=>i>array2[0])
    
    //4) Recursively check the first list of first array with first list of second and same for second list. 
    return !isSameBST(leftArray1, leftArray2) ? false : isSameBST(rightArray1, rightArray2) ? true : false
    
}

const nums1 = [3, 5, 4, 6, 1, 0, 2]
const nums2 = [3, 1, 5, 2, 4, 6, 0]
const nums3 = [3, 1, 4, 6, 0, 2, 5]

console.log(isSameBST(nums1, nums2))//true
console.log(isSameBST(nums2, nums3))//false