/*Armada
-Create an Armada class
-Contains a list of Ship
-Have a armada.war(otherArmada: Armada) method where two armada can engage in war
  -it should work like merge sort
  -first ship from the first armada battles the first one from the other
  -the loser ship gets skipped so the next ship comes in play from the loser ship's armada
     -it starts a battle with the first (not yet defeated) ship from the other armada
  -whichever armada gets to the end of its ships loses the war
  -return true if this is the winner*/

  /*
- Hozzon létre egy Armada osztályt
- Tartalmazza a hajók listáját
- Legyen egy armada.war(másArmada: Armada) módszere, ahol két armada harcolhat
  - Úgy kell működnie, mint az egyesített rendezés
  -az első hajó az első armada-ból csatázik az első a másikból
  -a vesztes hajót kihagyják, így a következő hajó kerül játékba a vesztes hajó armádájából
     -csatát kezd a másik armada első (még nem legyőzött) hajójával
  -amelyik armada hajói végére ér, az elveszti a háborút
  -vissza igaz, ha ez a nyertes*/

import { Pirate } from "./pirate";
import { Ship } from "./ship";
import { getRandomNumber } from "./randomgenerator";

export class Armada {
    private listOfShips: Ship[] = [];

    fillArmada() {
        let randomNumber: number = getRandomNumber(3, 10);
        for (let i = 0; i <= randomNumber; i++) {
            this.listOfShips.push(this.listOfShips[i]);
            this.listOfShips[i].fillShip();
        }
    }

    war(otherArmada: Armada): boolean {
        //https://flaviocopes.com/merge-sort-javascript/
        return
    }

}
