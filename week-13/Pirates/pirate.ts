/*
Create a Pirate class. You can add other fields and methods, yet, you must have these methods:

drinkSomeRum() - intoxicates the Pirate by one
howsItGoingMate() - when called, the Pirate replies:
if drinkSomeRun() was called less than 4 times:
"Pour me anudder!"
else:
"Arghh, I'ma Pirate. How d'ya d'ink its goin?". Then the pirate passes out and sleeps it off (gets rid of the intoxication).
If you manage to get this far, then you can try to do the following.

brawl(pirate: Pirate) - where pirate fights another pirate (if both of them are alive):
there is 1/3 chance that this dies, the other dies or they both pass out.
die() - this kills off the pirate. When a pirate is dead, every method simply results in: he's dead.
And... if you get that far...

Add a parrot.

Hozz létre egy kalóz osztályt. Hozzáadhat más mezőket és metódusokat, de rendelkeznie kell ezekkel a módszerekkel:

drinkSomeRum() - eggyel megrészegíti a Kalózt
howsItGoingMate() - amikor hívják, a kalóz ezt válaszolja:
ha a drinkSomeRun()-t 4-nél kevesebbszer hívták:
– Önts rám!
más:
"Arghh, kalóz vagyok. Hogy haladsz?". Aztán a kalóz elájul és elalszik (megszabadul a mámortól).
Ha sikerül idáig eljutni, akkor megpróbálhatja a következőket.

verekedés (kalóz: Kalóz) - ahol a kalóz egy másik kalóz ellen küzd (ha mindketten életben vannak):
1/3 esély van arra, hogy ez meghal, a másik meghal, vagy mindketten elájulnak.
die() - ez megöli a kalózt. Ha egy kalóz meghal, minden módszer egyszerűen azt eredményezi, hogy meghalt.
És ha idáig eljutsz...

Adj hozzá egy papagájt.*/


'use strict'

import { Bird } from "../../week-11/day-1/Zoo/bird";
import { getRandomNumber } from "./randomgenerator";

export class Pirate {
    private toxicateLevel: number = 0;
    private isAlive: boolean;
    private parrot?: Bird;

    constructor (parrot?:Bird){
        this.isAlive = true;
        this.parrot = parrot;
    }

    getIsAlive(): boolean {
        return this.isAlive;
    }

    getNumberOfRum(): number {
        return this.toxicateLevel;
    }

    drinkSomeRum(): void {
        if (this.isAlive === false) {
            console.log("he's dead");
        } else {
            this.toxicateLevel = this.toxicateLevel + 1;
            if (this.toxicateLevel >= 4) {
                this.passOut()     
            }
        }
    }

    howsItGoingMate(): void {
        if (this.isAlive === false) {
            console.log("he's dead");
        } else if (this.toxicateLevel < 4) {
            console.log("Pour me anudder!");
        } else {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
            this.passOut();
        }
    }
    brawl(pirate: Pirate): void {
        if (this.isAlive && pirate.isAlive) {
            let randomNumber: number = getRandomNumber(1, 6);
            if (randomNumber === 1||2) {
                this.die();
                
            } else if (randomNumber === 5 || 6) {
                pirate.die();
            } else {
                this.passOut();
                pirate.passOut();
            }
        } else {
            return;
        }
        //verekedés (kalóz: Kalóz) - ahol a kalóz egy másik kalóz ellen küzd (ha mindketten életben vannak):
            //1/3 esély van arra, hogy ez meghal, a másik meghal, vagy mindketten elájulnak.
    }

    passOut(): void {
        this.toxicateLevel = 0;
    }

    die() {
        this.isAlive = false;
    }  
}