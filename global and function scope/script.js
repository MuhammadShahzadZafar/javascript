//alert('Hello');
//console.log(innerWidth);

x = 100;

function run() {
    console.log(window.innerHeight);
    console.log(x, 'in function');
}
run();

if (true) {
    console.log(x, 'in block');
}

function add() {
    const y = 50;
    console.log(y);
}

add();