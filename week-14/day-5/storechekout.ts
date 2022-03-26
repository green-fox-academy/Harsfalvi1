//Write a function that receives a barcode and returns the price of the product. 
//Throw an error if the barcode is unknown.

//Example input: "1202" Example output: 340

const prices: { [key: string]: number } = {
    "1202": 340,
    "1203": 120,
    "1204": 70,
    "1205": 560,
    "1206": 230,
    "1207": 740,
};

function getPrice(barcode: string): number {
    const price = prices[barcode]
    if (!barcode || !price){
        throw new Error("Barcode or price is unknown");
    } 
    return price;    
}

//Write a second function that takes a shopping basket as an array of barcodes and returns the total price to pay.

//Example input: ["1202", "1203"] Example output: 460 (because "1202" costs 340 and "1203" costs 120)

function getTotalPriceToPay(barcodes: string[]): number {
    let totalPrice: number = 0;
    for (let i = 0; i < barcodes.length; i++) {
        const price = getPrice(barcodes[i]);
        totalPrice += price;   
    }
    return totalPrice;
}

console.log(getPrice("1202")); // 340
console.log(getTotalPriceToPay(["1202", "1203"])); // 460


        

    

    
        


