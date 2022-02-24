/*The Pirate Ship
The place for the Pirates

Create a Ship class.
The Ship stores Pirateinstances in a list as the crew and has one captain who is also a Pirate.
When a ship is created it doesn't have a crew or a captain.
The ship can be filled with pirates and a captain via fillShip() method.
fills the ship with a captain and a random (maximum 113) number of pirates
Ships should be represented in a nice way on command line including information about
rum consumed by the captain and its state (dead or alive)
number of alive pirates in the crew
Ships should have a method to battle other ships: ship.battle(otherShip: Ship)
should return true if the actual ship (this) wins
the ship should win if its calculated score is higher
calculated score: Number of alive pirates in the crew - Number of consumed rum by the captain
The loser crew has a random number of losses (deaths).
The winning captain and crew has a party: everyone drinks a random number of rum :)*/

/*Hozzon létre egy hajóosztályt.
A Hajó legénységként egy listán tárolja a kalózokat, és van egy kapitánya, aki szintén kalóz.
Amikor egy hajót létrehoznak, nincs se legénysége, se kapitánya.
A hajót fillShip() metódussal meg lehet tölteni kalózokkal és kapitánnyal.
megtölti a hajót egy kapitánnyal és véletlenszerű (maximum 113) számú kalózsal
A hajókat szép módon kell megjeleníteni a parancssorban, beleértve a vonatkozó információkat is
a kapitány által fogyasztott rum és annak állapota (élve vagy holtan)
élő kalózok száma a legénységben
A hajóknak rendelkezniük kell egy módszerrel, amellyel megküzdhetnek más hajókkal: ship.battle(otherShip: Ship)
igaznak kell visszatérnie, ha a tényleges hajó (ez) nyer
a hajó nyerjen, ha a számított pontszáma magasabb
számított pontszám: Élő kalózok száma a legénységben - A kapitány által elfogyasztott rum száma
A vesztes legénységnek véletlen számú vesztesége (halála) van.
A nyertes kapitány és a legénység bulizik: mindenki véletlenszerű számú rumot iszik :)*/

import os from 'os';
import { Pirate } from "./pirate";
import { getRandomNumber } from "./randomgenerator";


export class Ship {
  private listOfPirates: Pirate[] = [];
  private captain: Pirate = new Pirate();
  private name: string; //egyelőre adtam az instace-oknak nevet,hogy átláthatóbb legyen a toString, majd ki kell törölni. 

  constructor(name: string){
      this.name = name
  }

  fillShip(): void {
    let randomNumber: number = getRandomNumber(2, 113);
    for (let i = 0; i <= randomNumber; i++) {
      this.listOfPirates.push(new Pirate());
    }
    this.captain = new Pirate();
  }

  getNumberOfAlivePirates(): number {
    let numberOfAlivePirates: number = 0;
    this.listOfPirates.forEach((pirate) => {
      if (pirate.getIsAlive()) {
        numberOfAlivePirates += 1;
      }
    });
    return(numberOfAlivePirates); 
  }
   
  toString(): string {
    //A hajókat szép módon kell megjeleníteni a parancssorban, beleértve a vonatkozó információkat is
    //a kapitány által fogyasztott rum és annak állapota (élve vagy holtan)
    //élő kalózok száma a legénységben
    return `${os.EOL}${this.name}: The captain is consumed ${this.captain.getNumberOfRum()} portion(s) of rum. He's ${this.captain.getIsAlive()? "alive." : "dead."}  The number of alive pirates is:  ${this.getNumberOfAlivePirates()}${os.EOL}`

    }
    
  battle(otherShip: Ship): boolean {
    //A hajóknak rendelkezniük kell egy módszerrel, amellyel megküzdhetnek más hajókkal: ship.battle(otherShip: Ship)
    //igaznak kell visszatérnie, ha a tényleges hajó (ez) nyer
    //a hajó nyerjen, ha a számított pontszáma magasabb
    if (this.scoring() > otherShip.scoring()) {
      this.winAgain(otherShip);
      return true;
    } else {
        otherShip.winAgain(this);
        return false;
     }
  }

  scoring(): number {
    //számított pontszám: Élő kalózok száma a legénységben - A kapitány által elfogyasztott rum száma
    return this.getNumberOfAlivePirates() - this.captain.getNumberOfRum();
  }

  winAgain(otherShip: Ship): void {
    //A vesztes legénységnek véletlen számú vesztesége (halála) van.
    this.celebrate();
    let deadPirate: number = getRandomNumber(0, otherShip.getNumberOfAlivePirates());
    for (let i = 0; i < deadPirate; i++) {
      otherShip.listOfPirates[i].die();
    }
  }

  celebrate() {
    //A nyertes kapitány és a legénység bulizik: mindenki véletlenszerű számú rumot iszik.
    let randomNumber: number = getRandomNumber(1, 5);
    for (let i = 0; i < randomNumber; i++) {
      this.captain.drinkSomeRum();
      this.listOfPirates.forEach((pirate) => {
        pirate.drinkSomeRum();
      });
    }
  }
}

