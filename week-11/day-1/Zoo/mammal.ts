import { Animal } from "./animals";
import { Gender } from './gender';

export class Mammal extends Animal {
    private viviparous: boolean;

    constructor (name:string,age?:number,gender?:Gender, color?:string, viviparous: boolean = true) {
        super(name, age, gender, color);
        this.viviparous = viviparous
    }
    
    breed(): string {
        if (this.viviparous){
            return "by pushing miniature versions out."
        }
        else {
            return "by laying eggs."
        }   
    }
}