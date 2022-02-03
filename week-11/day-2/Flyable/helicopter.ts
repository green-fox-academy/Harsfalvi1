import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

export class Helicopter extends Vehicle implements Flyable {

    constructor(manufacturer: string, yearOfProduct: number, serialNumber: string){
        super (manufacturer, yearOfProduct, serialNumber)
    }

    land(): void {
        console.log("I'm landing.")
    }

    fly(): void {
        console.log("I'm flying.")
    }

    takeOff(): void{
        console.log("I'm take off.")
    }
}