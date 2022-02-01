import { Animal } from "./animals";
import { Gender } from './gender';

export class Reptile extends Animal {
    constructor (name:string, age?:number, gender?:Gender, color?:string) {
        super (name,age,gender,color);
    }

    breed(): string {
        return "by laying eggs."       
    }  
}