let arr = [1, 2, 3, 4, 5]

// This is one application of callback function
let x = arr.map(function process(v, i){
    /**
     * v -> value
     * i -> index
     */

    console.log(v, i);
    return v*v
})

console.log(x); // It is creating new array to store the data.
console.log(arr);