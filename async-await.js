function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched from server");
        }, 2000);
    });
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
