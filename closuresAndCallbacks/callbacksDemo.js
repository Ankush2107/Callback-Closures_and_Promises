function fun(x, fn) {
    /**
     * x -> number
     * fn -> callback function
     */

    // some logics
    for(let i = 0; i < x; i++) {
        console.log(i);
    }

    fn(); // calling the callback function passed
    // some more logic
}

fun(10, function log() {
    // This isthe callback function
    console.log('custom logger');
})