import { StringedInstrument } from "./sringedinstrument";

export class ElectricGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 6){
        super ("Electric Guitar", numberOfStrings)
    }

    play(): void {
        console.log ("Electric guitar, a " + this.numberOfStrings + "-stringed instrument tha goes " + this.sound());
    }

    sound(){
        return "Twang"
    }
}