

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
        if (root.value === null){ 
            root = new Node(value) 
            return root
        }

        //if root value === value return else
        if (root.value === value){ return root }


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

                if (lastNode.value > value){
                  lastNode.left = node
                }else {
                    lastNode.right = node
                }
            return root
        }
        

        deleteItem(currNode, value){ 
            //console.log(currNode)
            //console.log(currNode)
            //console.log(value)

            //let root = this.root


            if(currNode === null) { return currNode }

            //currNode = this.root

        if (value === currNode.value){
            console.log("found")
        
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

                //console.log(currNode.right)
                let subRight = this.smallRight(currNode.right)
                
                currNode.value = subRight.value

                //deletion happens here

                currNode.right = this.deleteItem(currNode.right, subRight.value)
            return currNode
            }
            
        }    //recursion
            else if(value < currNode.value){
                
                currNode.left = this.deleteItem(currNode.left, value)
                console.log(currNode)
                return currNode
            } else if (value > currNode.value){
                currNode.right = this.deleteItem(currNode.right, value)
                return currNode
            }
        
        }
    

        smallRight(node){
            //console.log(node)
            while(!node.left === null){
                node = node.left;
            }
        return node
    }
    
    find(currNode, value){
        console.log(currNode)

        //if there is no root then assign null
        if (currNode.value === null){ return null }
        
        //if root value === value return else
        if (currNode.value === value){ return currNode }
        
        if(currNode.value === value){
            console.log("Is code getting HERE!")
            console.log(value, currNode.value)
            console.log("found")
        } else{
        //check no childs
        if(currNode.left === null && currNode.right === null){ 
            return null
        }

        // check one node
        if(currNode.left === null){
            currNode = currNode.right
            return currNode
        }else if(currNode.right === null){
            currNode = currNode.left
            return currNode
        }

        console.log("test", currNode.value, value)
        
            if(currNode.value > value){
                console.log("test")
                return this.find(currNode.left, value)
            } else if (currNode.right < value) {
                return this.find(currNode.right, value)
            } 
        }
    }
    
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]


const bst = new BinarySearchTree(arr)
//console.log(bst.buildtree(arr))
//set a variable for the delete function to use
let test1 = bst.buildtree(arr)

//console.log(bst.insert(11))
//console.log(bst.deleteItem(test1, 1))
console.log(bst.find(test1, 1))
