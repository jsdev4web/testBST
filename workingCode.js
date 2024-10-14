

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

        if (currNode === null || currNode.value === value) {return currNode}
        
        if(currNode.value < value)
            return this.find(currNode.right, value)
        
        if(currNode.value > value){
            return this.find(currNode.left, value)
        }
    }

    levelOrder(callback){

        let result = []

        let root = callback
        if(root == null){ return null}

        console.log(root)
        let q = []
        q.push(root)
        
        console.log(q)

        //while queue greater 0
        while(q.length){
            
            //how many node in queue per ineration
            let levelSize = q.length
            let currentLevel = []

            for (let i = 0; i < levelSize; i++){
                let currNode = q.shift()
                currentLevel.push(currNode.value)
                if (currNode.left){
                    q.push(currNode.left)
                }

                if (currNode.right){
                    q.push(currNode.right)
                }
            }

            result.push(currentLevel)
        
        }

        return result
        
    }

    inorder(callback){
        let result = []
        if(callback == null){ return null }

        this.inorder(callback.left);
        console.log(callback.value)
        this.inorder(callback.right)

    }

    preorder(callback){
        let result = []
        if(callback == null){ return null }

        console.log(callback.value);
        this.inorder(callback.left);
        this.inorder(callback.right);

    }

    postorder(callback){
        let result = []
        if(callback == null){ return null }

        this.inorder(callback.left,);
        this.inorder(callback.right);
        console.log(callback.value);

    }

    height(callback){
        if(callback == null){ return -1 }

        let leftHeight = this.height(callback.left)
        let rightHeight = this.height(callback.right)

        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    depth(node, value){

        let root = node
        if(root == null){ return null}

        //console.log(root)

        let q = []
        q.push(root)
        let depthCounter = 0
        
        while(q.length){
            
            //how many node in queue per ineration
            let levelSize = q.length
            let currentLevel = []
            depthCounter++

            for (let i = 0; i < levelSize; i++){

                
                let currNode = q.shift()
                if(currNode.value === value ) { 
                    console.log(depthCounter - 1)
                    return "found"}
                currentLevel.push(currNode.value)


                if (currNode.left){
                    q.push(currNode.left)
                }

                if (currNode.right){
                    q.push(currNode.right)
                }
            }
        
        }

        return "Not Found"
        
    }

    isBalanced(callback){
        if(callback == null){ return null }

        let leftHeight = this.height(callback.left)
        let rightHeight = this.height(callback.right)

        let x = Math.abs(leftHeight - rightHeight === 1)

        console.log(leftHeight)
        if (leftHeight === rightHeight || leftHeight - rightHeight === x){
            return "is Balanced"
        } else {
            return "not Balanced"
        }
    }

    rebalance(callback){
        if(callback == null){ return null }


        let leftHeight = this.height(callback.left)
        let rightHeight = this.height(callback.right)

        console.log(leftHeight)
        if (leftHeight === rightHeight){
            return "is Balanced"
        } else {
            console.log("about to balance this")

            let tempArr = []
            this.inorder(callback.left);
            tempArr.push(callback.value)
            this.inorder(callback.right)

            console.log(tempArr)

            let mid = Math.floor(tempArr.length / 2)
            let root = new Node(tempArr[mid])
        
            root.left = this.buildtree(tempArr.slice(0, mid))
            root.right = this.buildtree(tempArr.slice(mid + 1))
        
            this.root = root

            return root
        }

    }
   
}

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]


const bst = new BinarySearchTree(arr)
console.log(bst.buildtree(arr))
//set a variable for the delete function to use
let test1 = bst.buildtree(arr)

//console.log(bst.insert(11))
//console.log(bst.deleteItem(test1, 1))
//console.log(bst.find(test1, 7))
//console.log(bst.levelOrder(test1))

//console.log(bst.postorder(test1))

//console.log(bst.height(test1))

//console.log(bst.depth(test1,  5 ))
//console.log(bst.isBalanced(arr))

///console.log(bst.rebalance(arr))

// ******driver code*******

let randomNums = [5, 23, 7, 8, 1, 11, 35, 53, 13, 3, 9, 200, 150, 125, 177, 103]
console.log(randomNums.length)

const driver = new BinarySearchTree(arr)
console.log(driver.buildtree(randomNums))
randomNums = driver.buildtree(randomNums)
console.log(driver.isBalanced(randomNums))
//console.log(driver.inorder(randomNums))
//console.log(driver.preorder(randomNums))
//console.log(driver.postorder(randomNums))

console.log(driver.isBalanced(randomNums))

console.log(driver.rebalance(randomNums))
console.log(driver.isBalanced(randomNums))