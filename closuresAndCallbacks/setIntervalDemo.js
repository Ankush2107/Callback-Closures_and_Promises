let task1 = setInterval(() => {
    console.log("Task one is over");
}, 5000);
let task2 = setInterval(() => {
    console.log("Task two is over");
    clearInterval(task1)
}, 2000);