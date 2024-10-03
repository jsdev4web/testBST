

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

        //console.log(arr)
        if (arr.length <= 0) { return null } 

        let mid = Math.floor(arr.length / 2)
        let root = new Node(arr[mid])
        
        root.left = this.buildtree(arr.slice(0, mid))
        root.right = this.buildtree(arr.slice(mid + 1))
        
        this.root = root

        return root
    }

    insert(value){

        //establish the root
        let root = this.root

        //if there is no root then assign null
        if (root === null){ return root = new Node(value) }

        //if root value === value return else
        if (root.value === value){ return root }

        //this variable = to the root
        let currNode = root

        //makes a new node
        let node = new Node(value)
        let lastNode = currNode

            while(currNode.value !== null){
            
            //console.log(currNode, " This works ")
            if(currNode.value > value){
                currNode = currNode.left
            } else if (currNode.value < value) {
                currNode = currNode.right
            } else {
                return currNode
            }

            if (lastNode.value > value){
                lastNode.left = node
            } else {
                lastNode.right = node
            }
            return root
        }   
    }
}

//const arr = [1, 2, 3, 4, 5, 6, 7]
let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const bst = new BinarySearchTree(arr)
console.log(bst.buildtree(arr))
bst.buildtree(arr)

console.log(bst.insert(5))
