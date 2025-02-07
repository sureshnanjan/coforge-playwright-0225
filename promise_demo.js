function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Data fetched from server");
            reject("Server Not reachable");
        }, 2000);
    });
}

function FetchNew(){
    return new Promise(PromiseHandler);
}

function PromiseHandler(success, failure){
    setTimeout(() => {
<<<<<<< HEAD
        if (true) {
            success("Data fetched from server");
        } else {
            failure("Server Not reachable"); 
        }
        //
        
=======
        success("Data fetched from server");
        //failure("Server Not reachable");
>>>>>>> b7cc709 (Adding promises, chai and mocha.)
    }, 2000);
}

FetchNew()
    .then((message) => {
        console.log(message);
        return "Processing data...";
    })
    .then((message) => {
        console.log(message);
        return "Displaying data...";
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Error:", error);
    });