
// Create a map where the keys are strings and the values are strings with the following initial values

const map: {[key:string]: string } = {
    
"978-1-60309-452-8":"A Letter to Jo",
"978-1-60309-459-7":"Lupus",
"978-1-60309-444-3": "Red Panda and Moon Bear",
"978-1-60309-461-0": "The Lab"
}

// Print all the key-value pairs in the following format
//console.log(Object.entries(map))

//Remove the key-value pair with key 978-1-60309-444-3

delete(map["978-1-60309-444-3"]);

// Remove the key-value pair with value The Lab
let keyToDelete: string= "";
Object.entries(map).forEach(element => {
    if (element [1] === "The Lab") {
        keyToDelete = element [0];
        delete(map[keyToDelete])
        return
    }  
});


//Add the following key-value pairs to the map
map["978-1-60309-450-4"] = "They Called Us Enemy"
map["978-1-60309-453-5"] = "Why Did We Trust Him?"

console.log(Object.entries(map))

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(map.hasOwnProperty('478-0-61159-424-8'));

//Print the value associated with key 978-1-60309-453-5
/*for (const [key, value] of Object.entries(map)) {
    console.log (`${value}`("978-1-60309-453-5":${key});
}*/