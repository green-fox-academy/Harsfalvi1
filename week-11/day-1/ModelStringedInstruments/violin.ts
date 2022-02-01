import { StringedInstrument } from "./sringedinstrument";

export class Violin extends StringedInstrument {
    constructor(numberOfStrings = 4){
        super("Violin", numberOfStrings)
    }

    play(): void {
        console.log ("Violin, a " + this.numberOfStrings + "-stringed instrument that goes " + this.sound());
    }
    sound(){
        return "Screech"
    }
}
