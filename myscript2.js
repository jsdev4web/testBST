

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
          

            
            let queue = [root, [lSide, rSide]]
            console.log(queue)
        
        //console.log(nums.length) while 7 > 0
        while (nums.length > 0){
            
            if (lSide.length && rSide.length !== null && root !== null){
            
            //the value is the first num in the array
            let data = nums.shift()
            //console.log(data)
            //console.log(nums)
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
