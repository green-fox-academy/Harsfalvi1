/*Milk	1.07
Rice	1.59
Eggs	3.14
Cheese	12.60
Chicken Breasts	9.40
Apples	2.31
Tomato	2.58
Potato	1.75
Onion	1.10*/

const priceList: { [key: string]: number } = {

    "Milk": 1.07,
    "Rice": 1.59,
    "Cheese": 12.60,
    "Chicken Breasts": 9.40,
    "Apples": 2.31,
    "Tomato": 2.58,
    "Potato": 1.75,
    "Onion": 1.10
}

const ListOfBob: { [key: string]: number } = {
    "Milk": 3,
    "Rice": 2,
    "Eggs": 2,
    "Cheese": 1,
    "Chicken Breasts": 4,
    "Apples": 1,
    "Tomato": 2,
    "Potato": 1,
}

const ListOfAlice: { [key: string]: number } = {
    "Rice": 1,
    "Eggs": 5,
    "Chicken Breasts": 2,
    "Apples": 1,
    "Tomato": 10,
}

//How much does Bob pay?

function payOf(listOfCostumer: { [key: string]: number }) {
    let Sum: number = 0;
    let Pieces: number = 0;
    for (const [key, value] of Object.entries(listOfCostumer)) {
        Sum = Sum + priceList[key] * value;
        Pieces += value

    }
    console.log(Sum);
}
payOf(ListOfBob)
payOf(ListOfAlice) //nem működik, NaN-t ad vissza

/*Who buys more Rice?
Who buys more Potato?
Who buys more Ham?
Who buys more Apples?*/


function buyMore(product: string) {
    if (ListOfAlice.hasOwnProperty(product) && ListOfBob.hasOwnProperty(product)) {
        if (ListOfBob[product] > (ListOfAlice[product])) {
            console.log("Bob");
        } else if ((ListOfBob[product]) < ListOfAlice[product]) {
            console.log("Alice");
        } else {
            console.log("no one");
        }
    } else if (ListOfAlice.hasOwnProperty(product)) {
        console.log("Alice");
    } else if (ListOfBob.hasOwnProperty(product)) {
        console.log("Bob");
    } else {
        console.log("no one");
    }
}

function buyMore2(product: string) {
    let aliceHasProduct: boolean = ListOfAlice.hasOwnProperty(product);
    let bobHasProduct: boolean = ListOfBob.hasOwnProperty(product);
    let bothHasProduct: boolean = aliceHasProduct && bobHasProduct;
    if (bothHasProduct && ListOfBob[product] > (ListOfAlice[product]) || bobHasProduct && !aliceHasProduct) {
        console.log("Bob");
    } else if (bothHasProduct && ListOfAlice[product] > (ListOfBob[product]) || aliceHasProduct && !bobHasProduct) {
        console.log("Alice");
    } else {
        console.log("no one");
    }
}

buyMore("Rice");
buyMore("Potato");
buyMore("Ham");
buyMore("Apples");

buyMore2("Rice");
buyMore2("Potato");
buyMore2("Ham");
buyMore2("Apples");


//Who buys more of different products?
if (Object.entries(ListOfAlice).length > Object.entries(ListOfBob).length) {
    console.log("Alice");
} else if (Object.entries(ListOfAlice).length < Object.entries(ListOfBob).length) {
    console.log("Bob");
} else console.log("no one");




//Who buys more items? (more pieces)
function countValues(somebodyList: { [key: string]: number }): number {
    let pieces: number = 0;
    let values: number[] = Object.values(somebodyList);

    for (let i = 0; i < values.length; i++) {
        pieces += values[i];
    }
    return pieces;
}
let aliceValues: number = countValues(ListOfAlice);
let bobValues: number = countValues(ListOfBob);

if (aliceValues > bobValues) {
    console.log("Alice");
} else if (aliceValues < bobValues) {
    console.log("Bob");
} else {
    console.log("no one");
}
