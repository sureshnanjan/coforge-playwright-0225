function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Data fetched from server");
            reject("SErver Not Reachable");
        }, 2000);
    });
}

async function name(params) {
    const data = await fetchData();
}

async function handleData() {
    try {
        const data = await fetchData();
        console.log(data);
        console.log("Processing data...");
        console.log("Displaying data...");
    } catch (error) {
        console.error("Error:", error);
    }
}

handleData();
