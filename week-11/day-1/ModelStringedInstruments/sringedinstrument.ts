import { Instrument } from "./instrument";

export class StringedInstrument extends Instrument {

    private numberOfStrings: number;
    protected soundOfInstrument: string;

    constructor(name: string, numberOfStrings: number, soundOfInstrument: string) {
        super(name)
        this.numberOfStrings = numberOfStrings;
        this.soundOfInstrument = soundOfInstrument;
    }
   
    sound(): string {
        return this.soundOfInstrument;
    }
    play(): string { 
        return this.name + ', a ' + this.numberOfStrings + "-stringed instrument that goes " + this.soundOfInstrument
    }
}