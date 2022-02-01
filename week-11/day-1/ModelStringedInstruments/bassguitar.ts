import { StringedInstrument } from "./sringedinstrument";

export class BassGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 4){
        super("Bassguitar", numberOfStrings)
    }

    play(): void {
        console.log ("Bassguitar, a " + this.numberOfStrings + "-stringed instrument tha goes " + this.sound());
    }

    sound(){
        return "Duum-duum-duum"
    }
}