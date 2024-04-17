function todo(task) {
    console.log("todo is started");
    setTimeout(function fun(){
        console.log("completed", task);
    }, 5000)
    console.log("todo is ended");
}

console.log("starting");
todo("assignments")
console.log("ending");