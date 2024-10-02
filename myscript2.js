

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(arr){
        this.arr = arr
        this.root = null
    }

    buildtree(arr) {

        console.log(arr)
        if (arr.length <= 0) { return null } 

        let mid = Math.floor(arr.length / 2)
        let root = new Node(arr[mid])
        
        root.left = this.buildtree(arr.slice(0, mid))
        root.right = this.buildtree(arr.slice(mid + 1))
        
        return root
    }
}

//const arr = [1, 2, 3, 4, 5, 6, 7]
let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const bst = new BinarySearchTree(arr)
console.log(bst.buildtree(arr))

