
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(arr){
        this.arr = arr
        this.root = null
    }

    buildtree(arr) {

        if (arr.length <= 0) { return null} 

        let root = this.root
        //console.log(root)  null
        let mid = Math.floor(arr.length / 2)
        //console.log(nums[mid])3-just mid and 4-mid nums

        root = new Node(arr[mid])
        //console.log(root)

        let lSide = arr.slice(0, mid)
        console.log(lSide, "left side, unused")

        let rSide = arr.slice(mid  + 1, arr.length)
        console.log(rSide, "right side unused")
        
        console.log(lSide.length, rSide.length)
         //while there is something in the queue of each mini array

        //total length of array to use as a counter
        let totalLength = lSide.length + rSide.length
        console.log(totalLength)


        for(let i = 0; i <= lSide.length; i++){
           //console.log(i) I got 7 loops through

            //if left side greater 3 and not = null
            if (lSide.length >= 3){
                //Get the middle of the left side
                let lMid = Math.floor(lSide.length / 2)
                //console.log(lMid)
                let parent = new Node(lSide[lMid])
                //console.log(root)
                //console.log(parent)
                root.left = parent  
                //console.log(lSide)
                //console.log(lSide)
            } 
            if (lSide.length <= 3){
                if(lSide[0] < lSide[2]){
                
                    //create a node for leaf 
                    let childL = new Node(lSide[0])
                    let childR = new Node(lSide[2])
                    //set parent node to left
                    let parent = root.left
                    //assign the chile node
                    parent.left = childL
                    parent.right = childR
                    
                } else{
                    
                    let childR = new Node(lSide[0])
                    let childL = new Node(lSide[2])
                    let parent = root.right
                    parent.right = childR
                    parent.left = childL
                    
                } 
            } else{
                //console.log(root.left)
                let mid = Math.floor(lSide.length / 2)
                let lmid = lSide[mid]
                //console.log(lmid)
                let leftSplits = lSide.slice(0, mid)
                let rightSplits = lSide.slice(mid + 1, lSide.length)
                //console.log(leftSplits)
                //console.log(rightSplits)
                //console.log(root.left)
                let parent = root.left
                let midl = Math.floor(leftSplits.length / 2)
                let midr = Math.floor(rightSplits.length / 2)
                let childL = new Node(leftSplits[midl])
                parent.left = childL
                let childR = new Node(rightSplits[midr])
                parent.right = childR

                childL.left = leftSplits[0]
                childL.right = leftSplits[2]
                childR.left = rightSplits[0]
                childR.right = rightSplits[2]
            }

            
            for(let j = 0; j <= lSide.length; j++){
                
                if(rSide.length >= 3){
                    //Get the middle of the left side
                    
                    let rMid = Math.floor(rSide.length / 2)
                    //console.log(rMid)

                    //let mid = Math.floor(arr.length / 2)

                    let mid = rSide[rMid]
                    //console.log(mid)
    
                    let parent = new Node(mid)
                    //console.log(parent)

                    root.right = parent
                   //console.log(parent)
                   
                }
                
                  if (rSide.length <= 3){

                    

                    if(rSide[0] < rSide[2]){
                        let childL = new Node(rSide[0])
                        //console.log(childL)
                        let childR = new Node(rSide[2])
                        //console.log(childR)

                        let parent = root.right
                       // console.log(parent)

                        parent.left = childL
                        //console.log(parent.left)
                        parent.right = childR
                        //console.log(parent.right)

                    } else{
                        //console.log("another test")
                        let childR = new Node(rSide[0])
                        let childL = new Node(rSide[2])
                        let parent = root.right
                        parent.right = childR
                        parent.left = childL
                    } 
                } else {
                    //console.log(root.left)
                let mid = Math.floor(rSide.length / 2)
    
                
                let leftSplits = rSide.slice(0, mid)
                let rightSplits = rSide.slice(mid + 1, rSide.length)
                //console.log(leftSplits)
                //console.log(rightSplits)
                //console.log(root.left)
                let parent = root.right
                let midl = Math.floor(leftSplits.length / 2)
                let midr = Math.floor(rightSplits.length / 2)
                let childL = new Node(leftSplits[midl])
                parent.left = childL
                let childR = new Node(rightSplits[midr])
                parent.right = childR

                childL.left = leftSplits[0]
                childL.right = leftSplits[2]
                childR.left = rightSplits[0]
                childR.right = rightSplits[2]
                }
           }
        }
        return root
        
    }//funct
} //class



//const nums2 = [1, 2, 3, 4, 5, 6, 7]
const nums2 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const bst = new BinarySearchTree(nums2)
//console.log(root.nums)
console.log(bst.buildtree(nums2))


//let queue = [[root,  [0, mid - 1]], [root, [mid + 1, nums.length - 1]]]
//console.log(queue)
//console.log(queue.length)
