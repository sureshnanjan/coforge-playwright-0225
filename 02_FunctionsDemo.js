let value = ""
// Behaviour 

function Greet(){

    console.log("Welcome to Automation")
}

function add2(first, second){

    return first + second
}

Greet();
console.log(add2(10,20));
//add2(10,20)

(function(f,s) {
    console.log(`Execution with ${f} ${s}`);
    return f + s;
})(30,40); // IIFE

let myfunc = (function(f,s) {
    console.log(`Execution with ${f} ${s}`);
    return f + s;
});

"su:re:sh".split()

let myoperation = () => console.log("This is my execution"); // Arrow function Lambda

myoperation();

let my2numberaddition = (f, s) => {}; 

my2numberaddition(100,200);
my2numberaddition(10,20)