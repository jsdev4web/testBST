

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


        //let lSide = nums.slice(0, mid-1)
        //console.log(lSide, "left side, unused")

        //let rSide = nums.slice(mid+1, nums.length-1)
        //console.log(rSide, "right side unused")
            
            let lSide = nums.slice(0, mid-1)
            let rSide = nums.slice(mid+1, nums.length-1)

            
            let queue = [root, [lSide, rSide]]
            console.log(queue)
        
        //console.log(nums.length) while 7 > 0
        while (nums.length > 0){
            console.log(lSide[0], "lside ")
            console.log(rSide[0], "rside ")
            if (lSide[0] < rSide[0] && root !== null){
            
            let mid = nums.length / 2
            //the value is the first num in the array
            let data = nums.shift()
            let child = new Node(data)

            if (nums[0] < root.value){
                root.left = new Node(data)
                } else {
                    root.right = child
                }

            } //if loop below then while
        }

        return root
    }
           
}



const nums = [1, 2, 3, 4, 5, 6, 7]
const bst = new BinarySearchTree(nums)
//console.log(root.nums)
console.log(bst.buildtree(nums))


//let queue = [[root,  [0, mid - 1]], [root, [mid + 1, nums.length - 1]]]
//console.log(queue)
//console.log(queue.length)
