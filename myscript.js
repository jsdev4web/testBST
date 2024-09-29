
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(nums){
        this.nums = nums
        this.root = null
    }

    buildtree(nums) {

        if (nums.length <= 0) { return null} 

        let root = this.root
        //console.log(root)  null
        let mid = Math.floor(nums.length / 2)
        //console.log(nums[mid])3-just mid and 4-mid nums

        root = new Node(nums[mid])
        //console.log(root)

        let lSide = nums.slice(0, mid)
        console.log(lSide, "left side, unused")

        let rSide = nums.slice(mid  + 1, nums.length)
        console.log(rSide, "right side unused")
        
        console.log(lSide.length, rSide.length)
         //while there is something in the queue of each mini array

        //total length of array to use as a counter
        let totalLength = lSide.length + rSide.length
        console.log(totalLength)

        let i = 0;


        while(totalLength >= i){
            i++ //console.log(i) I got 7 loops through

            //if left side greater 3 and not = null
            if (lSide.length >= 3 && lSide.length != null){
                //Get the middle of the left side

                let lMid = Math.ceil(lSide.length / 2)
                //console.log(lMid)
                

                let parent = new Node(lMid)
                root.left = parent //everything DIES HERE
                //buildtree(lSide)
                
            } else if (lSide <= 3 && lSide != null){
               
                if(lSide[0] < lSide[1]){
                    let child = new Node(lSide[0])
                    parent.left = child
                } else if (lSide[0] > lSide[1]){
                    let child = new Node(lSide[1])
                    parent.right = child
                } else if (rSide.length >= 3 && rSide.length != null){
                    //Get the middle of the left side
                    
                    let rMid = Math.ceil(rSide.length / 2)
                    console.log(rMid)
    
                    let parent = new Node(rMid)
                    root.left = parent
                }

                  else if (rSide <= 3 && rSide != null){
                    if(rSide[0] < rSide[1]){
                        let child = new Node(rSide[0])
                        parent.left = child
                    } else if (rSide[0] > rSide[1]){
                        let child = new Node(rSide[1])
                    }
                }
            }
        }//while
        return root
        
    }//funct
} //class



const nums = [1, 2, 3, 4, 5, 6, 7]
const bst = new BinarySearchTree(nums)
//console.log(root.nums)
console.log(bst.buildtree(nums))


//let queue = [[root,  [0, mid - 1]], [root, [mid + 1, nums.length - 1]]]
//console.log(queue)
//console.log(queue.length)
