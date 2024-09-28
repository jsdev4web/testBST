
let arr = [3, 2, 6, 1, 7, 2]


let unMerge = (arr) => {
    if(arr.length <= 1){ return arr}

    let mid = Math.floor(arr.length / 2)
    //console.log(mid)

    let left = unMerge(arr.slice(0, mid))
    let right = unMerge(arr.slice(mid))

    return mergeSort(left, right)
}


console.log(unMerge(arr))


function mergeSort(left, right){
    let newArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            newArr.push(left.shift())
        } else{
            newArr.push(right.shift())
        }
    }

    return [...newArr, ...left,  ...right]
}

