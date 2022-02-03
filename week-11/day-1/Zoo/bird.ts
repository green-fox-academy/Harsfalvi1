import { Animal } from "./animals";
import { Gender } from './gender';
import { Flyable } from "./../../day-2/Flyable/flyable"

export class Bird extends Animal implements Flyable {
    constructor (name:string, age?:number, gender?:Gender, color?:string) {
        super (name,age,gender,color)
    }
    
    breed(): string {
        return "by laying eggs."
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