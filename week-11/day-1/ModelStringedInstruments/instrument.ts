
//We start with a base, 
export abstract class Instrument {
     protected name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract play(): string
}



/*it reserves (e.g. protected) the name of the instrument
it should provide a play() method.
Next, we add another abstract class, StringedInstrument which extends Instrument. It

introduces numberOfStrings and
sound() method what's implementation is yet unknown
but with the help of the sound() the play() method is fully implementable
StingedInstrument has 3 descendants, namely:

Electric Guitar (6 strings, 'Twang')
Bass Guitar (4 strings, 'Duum-duum-duum')
Violin (4 strings, 'Screech')
The Workshop should be invoked from another file like app.ts or main.ts*/