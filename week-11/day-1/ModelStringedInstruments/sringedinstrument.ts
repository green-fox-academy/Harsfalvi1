import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {
    protected numberOfStrings: number;

   constructor(name: string, numberOfStrings: number = 6){
      super(name) 
   this.numberOfStrings = numberOfStrings
   }
    abstract sound():void
}