function a(name) {
    return function b() {
        console.log(name);
    }
}

let x = a('Ankush');

for(let i = 0; i < 1000000; i++) {

}

console.log(x);
x();