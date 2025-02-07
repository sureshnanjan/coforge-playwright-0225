console.log("starting")
setTimeout(
    ()=>{console.log("This is second in the sequence")},
5000);
console.log("Step 1");
setTimeout(add, 1000, 10, 20);
console.log("Step 2");

function add(a,b){
    console.log(a+b);
}




function TakesCallback(fnref){
    console.log("Doing some prepeartory tasks")
    fnref();
    console.log("Finishing The task");
}

function MakePDF(){}

/**
 * 
 */
function GetFormater(fname){}

function PrepareSalaryReport(){
    // Object containing all salary detail
    return {};
    //return MakePDF({});
}


function MakeFileFormats(formatname){
    switch (formatname) {
        case value:
            
            break;
    
        default:
            break;
    }
}

// Salary Report should be in PDF


function DoThings(){
    console.log("Doing tasks simple");
}

/*

function fibonaci(arg){
    if(arg === 1){
        return 1;
    }
    else{
        fibonacci(arg-1);
    }

}
 fibonaci(10);
*/

//DoThings();
// Call Backs
TakesCallback(DoThings);
TakesCallback(()=> console.log("This is a  arrow function task"));
TakesCallback(function(){console.log("This is an anonynous function")});

// Web Applications
// TODO: Implements Division Operator and Get a divider and shouw the resuts with multiple values
function GetOperator(opname){
    switch (opname) {
        case 'add':
            return (a,b) => a + b; 
            break;
        case 'sub':
                return (a,b) => a - b; 
                break;
        case 'mul':
                    return (a,b) => a * b; 
                    break;
            default:
            break;
    }

}

const myadder = GetOperator('add');
const mysubtracter = GetOperator('sub');
const mymultiplier = GetOperator('mul');
console.log(mysubtracter(10,20));
console.log(mysubtracter(100,200));
console.log(mysubtracter(1,2));





