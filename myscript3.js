

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

        if (nums.length === 0) { return null } 

        let root = this.root
        let mid = Math.floor(nums.length / 2)
        root = new Node(nums[mid])

        let queue = [ [root, [0, mid -1]], [root, [mid+1, nums.length - 1]] ]
        console.log(queue)
                
        while (queue.length > 0){
            
            let [parent, [left, right]] = queue.shift()
            //console.log(queue.shift())

            if (left <= right && parent != null) {
                let mid = Math.floor((left + right) / 2)
                let child = new Node(nums[mid])

                if (nums[mid] < parent.value){
                    parent.left = child;
                } else { 
                    parent.right = child
                }

                queue.push([child, [left, mid - 1]])
                queue.push([child, [mid+1, right]])
            }
        }
        return root
        
    }// funct
} //class



const nums = [1, 2, 3, 4, 5, 6, 7]
const bst = new BinarySearchTree(nums)
//console.log(root.nums)
console.log(bst.buildtree(nums))


//let queue = [[root,  [0, mid - 1]], [root, [mid + 1, nums.length - 1]]]
//console.log(queue)
//console.log(queue.length)



console.log(testArr)
