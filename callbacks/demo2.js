function todo(task) {
    setTimeout(function fun(){
        console.log("completed", task);
    }, 3000)
    task = "Not assignment"
}

console.log("starting");
todo("assignment")
console.log("ending");