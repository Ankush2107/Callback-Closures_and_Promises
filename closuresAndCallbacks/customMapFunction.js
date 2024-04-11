function mapper(arr, fn) {
    /*
    * arr -> arr is going to be an array of elements
    * fn -> callback function which expects two argumentsvalue and index
    */ 

    let result = []
    for(let i = 0; i < arr.length; i++) {
        let res = fn(arr[i], i)
        result.push(res)
    }
    return result;
}

let arr = [1, 2, 3, 4, 5]
let x = mapper(arr, function square(ele, i) {
    return ele * ele
})
console.log(x, arr);