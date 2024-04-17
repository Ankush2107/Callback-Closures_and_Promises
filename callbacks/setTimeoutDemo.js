// using clearTimeout

let task1 = setTimeout(() => {
    console.log('task one completed');
}, 10000)

let task2 = setTimeout(() => {
    console.log('task two completed');
    clearTimeout(task1)
}, 5000)