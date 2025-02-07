/* 
A callback is a function passed into another function as an argument and is executed after some operation has been completed. This is one of the simplest ways to handle asynchronous operations in JavaScript.
*/
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched from server");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

function processData1(callback) {
    console.log("Processing data...");
    callback();
}

//(processData);

function displayData() {
    console.log("Displaying data...");
}

function displayDataWithEmail(callback){
    console.log("Displaying data...");
    callclsback();
}

function sendEmail(){
    console.log("Sending the email");
}


fetchData(()=>{
    processData1(()=>{
        displayDataWithEmail(sendEmail);
    }); // Callback Hell / POD 
});
//fetchData(processData1(displayDataWithEmail(sendEmail)))





