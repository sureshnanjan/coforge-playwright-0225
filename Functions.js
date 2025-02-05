let name = "Sunil"

function fn1(){
    console.log("Inside fn");
}

function fn2(){
    return 2;    
}

function fn3(x, y){
    console.log(`Adding numbers ${x} and ${y}`)
    return x+y;
}

//Anonymous function - IIFE
(function(y,z){
    console.log("Multiplying 2 numbers ");
})(2,8);

//Arrow function
let fn4 = () => console.log("Inside fn4");

fn1();
let i = fn2();
console.log("Value  of i is "+ i);

let j = fn3(2,5);
console.log("Value  of j is "+ j);

fn4();