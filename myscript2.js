

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

        let noDupes = Array.from(new Set(arr))
        arr = noDupes

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
        if (root.value === null){ return root = new Node(value) }

        //if root value === value return else
        if (root.value === value){ return root }

        //this variable = to the root
        
        //console.log(currNode)

        //makes a new node
        let node = new Node(value)
        //this will be the last node I add the insert too
        let lastNode = null
        let currNode = root

            //while curr.value not null
            while(currNode !== null){
                lastNode = currNode
                //console.log(lastNode, " This works ")
            if(currNode.value > value){
                currNode = currNode.left
            }else if (currNode.value < value) {
                currNode = currNode.right
             } else {
                return "root"
             }
            }

            //console.log(lastNode)


                if (lastNode.value > value){
                  lastNode.left = node
                }else {
                    lastNode.right = node
                }
            return root
        }
        

        deleteItem(value){ 

            let root = this.root

            if(root === null) { return root }

            let currNode = root

        if (value === currNode.value){
            //nodes without children
            if (currNode.left === null && currNode.right === null ){
                return null
            //node with one child
            } else if(currNode.left === null){
                return currNode.right
            } else if(currNode.right === null){
                return currNode.left
            } else {
                // nodes with 2 children
                //smallest right subtree

                let subRight = this.smallRight(currNode.right)
                console.log(subRight)
                currNode.value = subRight.value

                currNode.right = this.arr.deleteItem(currNode.right, subRight.value)
            return currNode
            }

        }  /*  //recursion
            else if(value < currNode.value){
                currNode.left = this.deleteItem(value)
                return currNode
            } else if (value > currNode.value){
                currNode.right = this.deleteItem(value)
                return currNode
            }*/
            
        } 

        smallRight(node){
            while(node !== null && node.left !== null){
                node = node.left;
            
        return node
        }
    }
            
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]


//console.log(noDupes)

const bst = new BinarySearchTree(arr)
console.log(bst.buildtree(arr))
bst.buildtree(arr)

//console.log(bst.insert(11))

console.log(bst.deleteItem(5))
